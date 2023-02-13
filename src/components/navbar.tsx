import { useRouter } from 'next/router';

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
  ButtonGroup,
} from "@chakra-ui/react";


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  return (
    <Flex
      w='100%'
      top='0'
      position='fixed'
      css={{ backdropFilter: 'blur(20px)' }}
      bg={useColorModeValue('#ffffff80', '#20202380')}
      zIndex={200}
    >
    <Container
      p='4'
      display='flex'
      alignItems='center'
    >
      <Flex
        overflow='clip'
        cursor='pointer'
        userSelect='none'
        alignItems='center'
        onClick={() => router.push('/')}
      >
        <Image
          filter={useColorModeValue('', 'invert(1)')}
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
      </Flex>
      <Spacer />
      <ButtonGroup>
        <Button
          size='xs'
          variant='ghost'
          onClick={() => router.push('/readme')}
        >
          readme
        </Button>
        <Button
          size='xs'
          variant='ghost'
          onClick={() => router.push('/weblog')}
        >
          weblog
        </Button>
        <Spacer />
        <Button
          size='xs'
          colorScheme={useColorModeValue('purple', 'orange')}
          onClick={toggleColorMode}
        >
          {useColorModeValue(<MoonIcon />, <SunIcon />)}
        </Button>
      </ButtonGroup>
    </Container>
    </Flex>
  );
};

