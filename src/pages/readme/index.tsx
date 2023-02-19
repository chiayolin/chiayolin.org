import Layout from "@/components/layout";
import { Box, Heading } from "@chakra-ui/react";
import { getPostData } from "@/lib/weblog";
import MDXComponents from '@/components/mdx-components';
import { Image } from '@/components/prose';
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
      <Box
        mb='5'
        mx='auto'
        boxSize='15rem'
        overflow='hidden'
        userSelect='none'
        borderRadius='full'
      >
        <Image
          transform='scale(1.09)'
          objectPosition='20% 0'
          src={frontmatter?.cover}
          alt={frontmatter?.caption}
        />
      </Box>
      <MDXRemote
        {... {compiledSource}}
        components={MDXComponents}
      />
    </Layout>
  );
}
