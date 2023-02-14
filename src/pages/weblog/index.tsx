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
        ~/*.txt
      </Heading>
      <VStack align='start'>
        {Object.values(postMeta).map(({postId, title, date}) => (
          <Box key={postId}>
            <Text>
              <Link as={NextLink} href={`/weblog/${postId}`}>
                {title}
              </Link>
            </Text>
            <Text fontFamily='mono' fontSize='xs' colorScheme='gray'>
              {formatDate(date)}
            </Text>
          </Box>
        ))}
        </VStack>
    </Layout>
  );
}
