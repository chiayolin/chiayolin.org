import rehypePrettyCode from 'rehype-pretty-code';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import fs from 'fs';

const postDir = path.join(process.cwd(), '/posts');

export interface PostMeta {
  postId: string,
  title: string,
  date: string,
}

export function getPostIds() {
  const filenames = fs
    .readdirSync(postDir)
    .filter((fn) => !/^\./.test(fn));

  return filenames.map((fn) => (
    {
      params: {
        id: fn.replace(/\.mdx$/, ''),
      },
    }
  ));
};

export async function getPostData(id: string)  {
  const filePath = path.join(postDir, `${id}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const mdxSource = await serialize(raw, {
    mdxOptions: {
      rehypePlugins: [[rehypePrettyCode, {
        // Use one of Shiki's packaged themes
        theme: 'one-dark-pro',

        // Callback hooks to add custom logic to nodes when visiting
        // them.
        onVisitLine(node: any) {
          // Prevent lines from collapsing in `display: grid` mode, and
          // allow empty lines to be copy/pasted
          if (node.children.length === 0) {
            node.children = [{type: 'text', value: ' '}];
          }
        },
        onVisitHighlightedLine(node: any) {
          // Each line node by default has `class="line"`.
          node.properties.className.push('highlighted');
        },
        onVisitHighlightedWord(node: any) {
          // Each word node has no className by default.
          node.properties.className = ['word'];
        },
      }],
    ]},
    parseFrontmatter: true,
  });

  // stringify to serialize date in frontmatter
  return JSON.parse(JSON.stringify(mdxSource));
};

// TODO: re-implement this using graymatter since ther's no need to parse
// the entire markdown file just to get the frontmatter
export async function getSortedPostMeta() {
  const postIds = getPostIds();
  let postMeta = [];

  for (let { params: { id: postId }} of postIds) {
    const { frontmatter } = await getPostData(postId);

    if(!postId.startsWith('_'))
      postMeta.push({ postId, ...frontmatter });
  }

  return postMeta.sort((a, b) => a.date < b.date ? 1 : -1);
}

