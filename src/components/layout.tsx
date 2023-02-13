import { FC, PropsWithChildren } from 'react';

import { Box, Container, Heading, } from '@chakra-ui/react';
import Dashboard from '@/components/dashboard';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Head from 'next/head';

//interface Props {
//  // children prop has to be explicitly typed, since implicit children has been
//  // removed from the definition of FunctionComponent:
//  //
//  // see
//  //    <https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210>
//  // and
//  //    <rationale: https://solverfox.dev/writing/no-implicit-children/>
//  children: ReactNode,
//}

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>chiayolin.org</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Chiayo's homepage on the web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box pt='16'>
        <Box
          mt='-2'
          w='100%'
          position='fixed'
          background='orange.400'
          textAlign='center'
        >
          <Heading size='sm' color='black'>
          This Site is Under Construction
          </Heading>
        </Box>
        <Navbar />
        <Box>
          <Container>
            {/*<Dashboard />*/}
            {children}
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;

