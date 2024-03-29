import Layout from '@/components/layout';
import { formatDate } from '@/lib/date';
import { getSortedPostMeta, PostMeta } from '@/lib/weblog';
import { Box, Heading, Link, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';

export async function getStaticProps() {
  const postMeta = await getSortedPostMeta();

  return {
    props: {
      postMeta,
    },
  };
}

export default function Weblog( { postMeta }: { postMeta: PostMeta[] }) {
  return (
    <Layout>
      <Heading
        mb='5'
        size='md'
        fontFamily='mono'
      >
        ls ~/*.txt
      </Heading>
      <VStack align='start'>
        {Object.values(postMeta)
          .filter(({ title }) => !title.startsWith('_'))
          .map(({postId, title, date}) => (
            <Box key={postId}>
              <Text fontSize='xl'>
                <Link as={NextLink} href={`/weblog/${postId}`}>
                  {title}
                </Link>
              </Text>
              <Text fontSize='sm' colorScheme='gray'>
                {formatDate(date)}
              </Text>
            </Box>
          ))}
      </VStack>
    </Layout>
  );
}
