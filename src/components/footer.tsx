import Balancer from 'react-wrap-balancer';
import { Box, Center, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Hr } from './prose';


export default function Footer() {
  return (
    <Box mt='6' mb='12'>
      <Hr w='100%' mb='12' />
      <Center>
        <Balancer>
          <Text
            textAlign='center'
            fontFamily='monospace'
          >
            Copyleft 2014-{`'`}23 Chiayo Lin (
            <Link
              href='https://github.com/chiayolin/chiayolin.github.io'
              isExternal
            >
              source <ExternalLinkIcon />
            </Link>
            )
          </Text>
        </Balancer>
      </Center>
    </Box>
  );
}

