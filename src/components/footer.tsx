import Balancer from 'react-wrap-balancer';
import { Center, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";


export default function Footer() {
  return (
    <Center mx='2' my='12'>
      <Balancer>
      <Text
        textAlign='center'
        fontFamily='monospace'
      >
        Copyleft 2014-'23 Chiayo Lin (
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
  );
}

