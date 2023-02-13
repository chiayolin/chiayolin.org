import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { NextRouter, useRouter } from 'next/router';
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
  FlexProps,
  ColorModeContextType,
  Drawer,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
} from "@chakra-ui/react";

import NextLink from 'next/link';

export default function Navbar() {
  const colorMode = useColorMode();
  const router = useRouter();

  return (
    <Box pt={{base: '20', md: '16'}}>
      <DesktopNav
        {...{router, colorMode}}
        display={{base: 'none', md: 'flex'}}
      />
      <MobileNav
        {...{router, colorMode}}
        display={{base: 'flex', md: 'none'}}
      />
    </Box>
  );
};

interface NavProps extends FlexProps {
  router?: NextRouter,
  colorMode?: ColorModeContextType
}

function BaseNav({ children, ...rest}: NavProps) {
  return (
    <Flex
      top='0'
      w='100%'
      zIndex={200}
      position='fixed'
      css={{ backdropFilter: 'blur(20px)' }}
      bg={useColorModeValue('#ffffff80', '#20202380')}
      {...rest}
    >
      {children}
    </Flex>
  );
}

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  router: NextRouter | undefined
}

function MobileDrawer({ onClose, isOpen, router }: MobileDrawerProps) {
  return (
    <Drawer
      {...{onClose, isOpen}}
      placement='left'
      size='xs'
    >
      <DrawerOverlay>
        <DrawerContent bg={useColorModeValue('lightBg', 'darkBg')}>
          <DrawerCloseButton
            top='5'
            variant='link'
            _focus={{border: 'none', boxShadow:'none'}}
          />
          <DrawerHeader>
            <Heading
              mt='2'
              fontSize='md'
              fontWeight='black'
              letterSpacing='tight'
              onClick={() => router?.push('/')}
            >
              chiayolin<Box as='span' fontWeight='normal'>.org</Box>
            </Heading>
          </DrawerHeader>
          <DrawerBody>
            <VStack  fontSize='3xl'>
              <Box onClick={() => router?.push('/readme')}>readme</Box>
              <Box onClick={() => router?.push('/weblog')}>weblog</Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

function MobileNav({router, colorMode, ...rest}: NavProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <BaseNav {...rest}>
      <Container
        p='4'
        display='flex'
        alignItems='center'
      >
        <Flex
          flex='1'
          justifyContent='center'
          alignItems='center'
        >
          <Box
            p='0'
            ml='-2'
            mr='auto'
            as={Button}
            fontSize='xl'
            variant='link'
            onClick={onOpen}
            color={useColorModeValue('black', 'white')}
          >
            <HamburgerIcon />
          </Box>
          <MobileDrawer {...{isOpen, onClose, router}} />
        </Flex>
        <Flex
          flex='1'
          justifyContent='center'
        >
          <Image
            height='10'
            alt='hayashi'
            cursor='pointer'
            userSelect='none'
            src='/hayashi.png'
            onClick={() => router?.push('/')}
            filter={useColorModeValue('', 'invert(1)')}
          />
        </Flex>
        <Flex
          flex='1'
          justifyContent='center'
          alignItems='center'
        >
          <Button
            p='0'
            mr='-2'
            ml='auto'
            fontSize='lg'
            variant='link'
            onClick={colorMode?.toggleColorMode}
            colorScheme={useColorModeValue('purple', 'orange')}
          >
            {useColorModeValue(<MoonIcon />, <SunIcon />)}
          </Button>
        </Flex>
      </Container>
    </BaseNav>
  );
}

function DesktopNav({router, colorMode, ...rest}: NavProps) {
  return (
    <BaseNav {...rest}>
      <Container
        p='4'
        display='flex'
        alignItems='center'
      >
        <Flex
          cursor='pointer'
          userSelect='none'
          alignItems='center'
          onClick={() => router?.push('/')}
        >
          <Image
            filter={useColorModeValue('', 'invert(1)')}
            height='7'
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
            onClick={() => router?.push('/readme')}
          >
            readme
          </Button>
          <Button
            size='xs'
            variant='ghost'
            onClick={() => router?.push('/weblog')}
          >
            weblog
          </Button>
          <Button
            size='xs'
            variant='ghost'
            colorScheme={useColorModeValue('purple', 'orange')}
            onClick={colorMode?.toggleColorMode}
          >
            {useColorModeValue(<MoonIcon />, <SunIcon />)}
          </Button>
        </ButtonGroup>
      </Container>
    </BaseNav>
  );
}

