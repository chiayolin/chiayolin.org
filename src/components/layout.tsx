import { FC, PropsWithChildren } from 'react';
import { Box, Container, } from '@chakra-ui/react';
//import Dashboard from '@/components/dashboard';
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
      <Box>
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

