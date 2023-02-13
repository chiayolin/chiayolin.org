import { FC } from "react";
import { Center, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Footer: FC = () => (
  <>
    <Center mt='8' mb='8'>
      <Text
        textAlign='center'
        fontFamily='monospace'
      >
        EOF (
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
