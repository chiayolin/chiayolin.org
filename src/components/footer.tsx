import { FC } from "react";
import { Center, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Footer: FC = () => (
  <>
    <Center mt='12' mb='12'>
      <Text
        textAlign='center'
        fontFamily='monospace'
      >
        Copyleft 2014-2023 Chiayo Lin (
        <Link
          href='https://github.com/chiayolin/chiayolin.github.io'
          isExternal
        >
          view source <ExternalLinkIcon />
        </Link>
        )
      </Text>
    </Center>
  </>
);

export default Footer;
