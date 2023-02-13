import moment from 'moment';
import { getPostData, getPostIds } from '@/lib/blog';

import Layout from '@/components/layout';
import Balancer from 'react-wrap-balancer';
import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';

import MDXComponents from '@/components/mdx-components';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

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
        mb='2'
        size='lg'
        fontWeight='normal'
        overflowWrap='break-word'
      >
        <Balancer>{frontmatter?.title}</Balancer>
      </Heading> 
      <Box mb='8'>
        <Text fontSize='sm'>
          {moment(frontmatter?.date).format('MMM DD, YYYY')}
          {frontmatter?.location ? ` @ ${frontmatter?.location}` : ''}
        </Text>
      </Box>
      <MDXRemote
        {... {compiledSource}}
        components={MDXComponents}
      />
    </Layout>
  );
}
