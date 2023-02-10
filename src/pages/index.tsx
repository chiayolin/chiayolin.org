import Layout from '@/components/layout';
//import Model from '@/components/model';
import Head from 'next/head';

import { lazy, Suspense } from 'react'
import { Canvas, } from '@react-three/fiber'
import { FirstPersonControls, OrbitControls } from '@react-three/drei';
import { Box, Heading, Text, Link, Divider, StackDivider, Card, CardBody, VStack, CardHeader, CardFooter, Code, Button, ButtonGroup, Flex, Spacer } from '@chakra-ui/react';

const Model = lazy(() => import("@/components/model"));

export default function Home() {
  return (
    <>
      <Head>
        <title>chiayolin.org</title>
        <meta name="description" content="Chiayo Lin's Homepage on the Web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Box h='0' borderRadius='3xl'>
          <Canvas>
        <Model />
          </Canvas>
        </Box>
        <Heading size='md' fontWeight='medium'>
          Chiayo Lin
        </Heading>
        <Text fontWeight='thin'>Software Engineer, he/him/他.</Text>

        <Box mt='4'>
          <Box>
            <Text fontSize=''>
              PGP: <Link>57b0-820a-ec30-e858</Link>
            </Text>
          </Box>
          <Box>
            <Link fontSize='' href=''>Email</Link>
            {' • '}
            <Link fontSize='' href=''>Resume</Link>
            {' • '}
            <Link fontSize='' href=''>LinkedIn</Link>
            {' • '}
            <Link fontSize='' href=''>GitHub</Link>
          </Box>
        </Box>


        <Heading mt='8' size='md' fontWeight='medium'>
         About
        </Heading>
        <Text mt='1rem'>
          I'm a SWE based in the Washington DC area. I'm currently open to
          software engineering opportunities across Continental US.
        </Text>
        <Text mt='1rem' mb='1rem'>
          I graduated from the University of Maryland, College Park with a B.S.
          degree in Computer Science and a minor in Statistics.
        </Text>

        <Link mt='1rem' href=''>Read more...</Link>

        {/*
        <Text mt='1rem'>
          I was born in Taipei, Taiwan and moved to Ho Chi Minh City
          (HCMC), Vietnam when I was a kid with my family. During my time in 
          HCMC, I attended an <Link href='https://www.ssis.edu.vn'>
          international school</Link>, where I was exposed to an array of
          diverse cultures.
        </Text>

        <Heading mt='8' size='sm' fontWeight='medium'>
          Aside: How I Do My Computing
          </Heading>
        <Text mt='1rem'>
          All my machines run POSIX-compatible operating systems. Most of my
          programming work is done in a terminal emulator (kitty) and Vim
          (NeoVim), for productivity's sake. As for keyboards, for those
          interested, I primarily use my laptop's keybaord, and a HHKB when I'm
          at home.
        </Text>
        <Text mt='1rem'>
          I'm proficient in C, Python, React/TypeScript, and Lisp.
        </Text>
        */}
        <Heading mt='8' size='md' fontWeight='medium'>
         Posts
        </Heading>
        <VStack mt='4' alignItems='start'>
          <Box>
            <Text >
            <Link href=''>
              Writing Your Own Lisp Compiler
            </Link>
            </Text>
            <Text fontSize='sm' fontWeight='normal' colorScheme='gray'>
              Feb 10, 2023
            </Text>
          </Box>
          <Box>
            <Text >
            <Link href=''>
            What Is This Site Really About?
            </Link>
            </Text>
            <Text fontSize='sm' fontWeight='normal' colorScheme='gray'>
              Dec 01, 2020
            </Text>
          </Box>
          <Box>
            <Text >
            <Link href=''>
            A Note on Programming Languages
            </Link>
            </Text>
            <Text fontSize='sm' fontWeight='normal' colorScheme='gray'>
              Aug 23, 2019
            </Text>
          </Box>
        </VStack>
      </Layout>
    </>
  )
}
