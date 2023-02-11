import { FC, PropsWithChildren } from 'react';
import { Box, Container, } from '@chakra-ui/react';
import Dashboard from './dashboard';
import Navbar from './navbar';
import Footer from './footer';

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
    <Box pt='20'>
      <Navbar />
      <Box>
        <Container>
          <Dashboard />
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;

