import { getPostData, getPostIds } from '@/lib/weblog';
import { Image, Hr } from '@/components/prose';

import Layout from '@/components/layout';
import Balancer from 'react-wrap-balancer';
import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';

import MDXComponents from '@/components/mdx-components';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { formatDate } from '@/lib/date';

interface PostId {
  params: {
    id: string,
  },
}

export async function getStaticProps({ params }: PostId) {
  const mdxSource = await getPostData(params.id);

  return {
    props: {
      mdxSource,
    },
  };
}

export async function getStaticPaths() {
  const paths = getPostIds();

  return {
    paths,
    fallback: false,
  };
}

interface MDXSource {
  mdxSource: MDXRemoteSerializeResult,
}

export default function Post({ mdxSource }: MDXSource) {
  const {compiledSource, frontmatter} = mdxSource;

  return (
    <Layout>
      <Heading
        mb='5'
        size='lg'
        fontWeight='normal'
        overflowWrap='break-word'
      >
        <Balancer>{frontmatter?.title}</Balancer>
      </Heading> 
      {frontmatter?.cover ? 
        <>
          <Box overflow='hidden' maxH='60' borderRadius='lg' mb='2'>
            <Image
              alt={frontmatter?.caption}
              src={frontmatter.cover}
            />
          </Box>
          <Text
            textAlign='center'
            fontStyle='italic'
          >
            {frontmatter?.caption}
          </Text>
        </>
        : ''}

      <Box mt='5' mb='5'>
        <Text fontSize='sm'>
          {formatDate(frontmatter?.date)}
          {frontmatter?.location ? ` @ ${frontmatter?.location}` : ''}
        </Text>
        <Hr />
      </Box>
      <MDXRemote
        {... {compiledSource}}
        components={MDXComponents}
      />
    </Layout>
  );
}

