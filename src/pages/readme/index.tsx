import Layout from "@/components/layout";
import { Heading } from "@chakra-ui/react";
import { getPostData } from "@/lib/weblog";
import MDXComponents from '@/components/mdx-components';
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export async function getStaticProps() {
  const mdxSource = await getPostData('_readme');

  return {
    props: {
      mdxSource,
    },
  };
}

export default function Readme({ mdxSource }: {
  mdxSource: MDXRemoteSerializeResult
}) {
  const {compiledSource, frontmatter} = mdxSource;

  return (
    <Layout>
      <Heading mb='5' size='md' fontFamily='mono'>{frontmatter?.title}</Heading>
      <MDXRemote
        {... {compiledSource}}
        components={MDXComponents}
      />
    </Layout>
  );
}
