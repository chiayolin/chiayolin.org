import moment from 'moment';
import NextLink from 'next/link';
import { getSortedPostMeta } from '@/lib/blog';
import Layout from '@/components/layout';
import { Hr, Paragraph } from '@/components/prose';

import {
  Box,
  Text,
  Link,
  VStack,
  Heading,
  Image,
  Flex,
} from '@chakra-ui/react';

import {
  IoMail,
  IoLockClosed,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io5';

export async function getStaticProps() {
  const postMeta = await getSortedPostMeta();

  return {
    props: {
      postMeta
    }
  };
}

interface PostMeta {
  postId: string,
  title: string,
  date: string,
}

export default function Home({ postMeta }: {postMeta: PostMeta[]}) {
  return (
    <Layout>
      <Box overflow='clip' maxH='60' borderRadius='lg' mb='5'>
        <Image
          alt='cover photo'
          src='https://i.imgur.com/U9sEcG6h.jpg'
        />
      </Box>

      <Heading size='md' fontWeight='medium'>
        Chiayo Lin
      </Heading>
      <Text mb='5' fontWeight='thin'>Software Engineer, he/him/他.</Text>
      <Flex mb='5' wrap='wrap' alignItems='center' rowGap='5' fontSize='sm'>
        <VStack direction='column' align='stretch' spacing='1'>
          <Flex alignItems='center'>
            <IoLockClosed />
            <Text ml='1'>
              PGP: <Link>57B0-820A-EC30-E858</Link>
            </Text>
          </Flex>
          <Flex alignItems='center'>
            <IoMail />
            <Text ml='1'>
              Email: cyl [at] umd [dot] edu
            </Text>
          </Flex>
          <Flex alignItems='center'>
            <IoLogoLinkedin />
            <Text ml='1'>
              LinkedIn: <Link href=''>/in/chiayolin</Link>
            </Text>
          </Flex>
          <Flex alignItems='center'>
            <IoLogoGithub />
            <Text ml='1'>
              GitHub: <Link href=''>@chiayolin</Link>
            </Text>
          </Flex>
        </VStack>
      </Flex>
      <Hr />

      <Heading fontFamily='mono' mb='5' size='md'>
        whoami
      </Heading>

      <Paragraph lineHeight='6'>
        I'm a SWE based in the Washington DC area. I'm currently open to
        software engineering opportunities across Continental US.
      </Paragraph>

      <Paragraph lineHeight='6'>
        I recently graduated from the University of Maryland, College Park with a B.S.
        degree in Computer Science and a minor in Statistics.<br/>
      </Paragraph>

      <Paragraph>
        <Link mb='5' href=''>Read more...</Link>
      </Paragraph>
      <Hr />

      <Heading fontFamily='mono' mb='5' size='md'>
        ~/*.txt
      </Heading>
      <VStack alignItems='start'>
        {Object.values(postMeta).map(({postId, title, date}) => (
          <Box key={postId}>
            <Text>
              <Link as={NextLink} href={`/blog/${postId}`}>
                {title}
              </Link>
            </Text>
            <Text fontFamily='mono' fontSize='xs' colorScheme='gray'>
              {moment(date).format('MMM DD, YYYY')}
            </Text>
          </Box>
        ))}
      </VStack>
    </Layout>
  )
}

