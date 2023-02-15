import Balancer from 'react-wrap-balancer';
import { Box, Center, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Hr } from './prose';


export default function Footer() {
  return (
    <Box my='6'>
      <Hr w='100%' />
      <Center>
        <Balancer>
          <Text
            textAlign='center'
            fontFamily='monospace'
          >
            © 2013-2023 chiayolin.org (
            <Link
              href='https://github.com/chiayolin/chiayolin.github.io'
              isExternal
            >
              repository <ExternalLinkIcon />
            </Link>
            )
          </Text>
        </Balancer>
      </Center>
    </Box>
  );
}

