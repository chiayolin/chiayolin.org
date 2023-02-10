import { FC, ReactNode } from 'react';

import Navbar from './navbar';
import { Box, Center, Container, Link, Tag, Text } from "@chakra-ui/react";

interface Props {
  // children prop has to be explicitly typed, since implicit children has been
  // removed from the definition of FunctionComponent:
  //
  // see
  //    <https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210>
  // and
  //    <rationale: https://solverfox.dev/writing/no-implicit-children/>
  children: ReactNode,
}

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <Box pt='20'>
      <Navbar />
      <Container as='main'>
        {children}
      </Container>
      <Center mt='8' mb='8'>
        <Tag size='sm' colorScheme='green' variant='subtle'>build-a2b55c1</Tag>
        <Text fontSize='sm' ml='2'>:wq</Text>
      </Center>
    </Box>
  );
};

export default Layout;

