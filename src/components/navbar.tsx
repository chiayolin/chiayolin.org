import { FC } from 'react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Flex,
  Image,
  Spacer,
  Button,
  Heading,
  useColorMode,
  useColorModeValue,
  Container,
  Box,
} from "@chakra-ui/react";

const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      w='100%'
      top='0'
      position='fixed'
      css={{ backdropFilter: 'blur(10px)' }}
      bg={useColorModeValue('#ffffff40', '#20202380')}
      zIndex={200}
    >
    <Container
      p='4'
      display='flex'
      alignItems='center'
    >
      <Image
        filter={colorMode === 'light' ? '' : 'invert(1)'}
        height='6'
        alt='hayashi'
        src='/hayashi.png'
      />
      <Heading
        ml='1.5'
        size='sm'
        fontWeight='black'
        letterSpacing='tight'
      >
        chiayolin<Box as='span' fontWeight='normal'>.org</Box>
      </Heading>
      <Spacer />
      <Button
        size='xs'
        colorScheme={colorMode === 'light' ? 'purple' : 'orange'}
        onClick={toggleColorMode}
      >
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Container>
    </Flex>
  );
};

export default Navbar;

