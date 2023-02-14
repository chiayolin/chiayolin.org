import { Box, Image, Text, Link } from '@chakra-ui/react';
import Layout from '@/components/layout';
import NextLink from 'next/link'

export default function Error404() {
  return (
    <Layout>
      <Box overflow='clip' borderRadius='lg' mb='5'>
        <Image
          alt='404 not found'
          src='https://i.imgur.com/2tmydTzh.jpg'
        />
      </Box>
      <Box
        p='5'
        mb='5'
        borderRadius='lg'
        maxW='container'
        overflow='scroll'
        borderWidth='thin'
        whiteSpace='nowrap'
        fontFamily='monospace'
      >
        {`fprintf(stderr, "error: no such file or directory\n");`}<br/>
        {`fprintf(stderr, "visit / for the index of this site.\n");`}<br/>
        {`return EXIT_FAILURE;`}
      </Box>
      <Text mb='5' >
        <Link as={NextLink} href='/'>return home</Link>
      </Text>
    </Layout>
  )
}
