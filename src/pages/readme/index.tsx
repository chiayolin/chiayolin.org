import { Paragraph } from "@/components/prose";
import Layout from "@/components/layout";
import { Heading } from "@chakra-ui/react";

export default function Readme() {
  return (
    <Layout>
      <Heading mb='5' size='md' fontFamily='mono'>readme</Heading>
      <Paragraph>
        This site is udner construction.
      </Paragraph>
    </Layout>
  );

}
