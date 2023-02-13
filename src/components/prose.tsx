import { ReactNode } from 'react';

import {
  chakra, 
  ChakraProps,
  Text,
  Code,
  Divider,
} from '@chakra-ui/react';


interface ProseProps extends ChakraProps {
  children?: ReactNode;
}

export const proseSpacing = '5'

export function Blockquote(props: ChakraProps) {
  return (
    <chakra.blockquote
      pl='2'
      mb={proseSpacing}
      borderLeftWidth='thick'
      {...props}
    />
  );
}

export function Codeblock(props: ChakraProps) {
  return (
    <Code
      color='#abb2bf'
      borderRadius='md'
      backgroundColor='#282c34'
      {...props}
    />
  );
}

export function Hr(props: ChakraProps) {
  return (
    <Divider mt={proseSpacing} mb={proseSpacing} {...props} />
  );
}

export function Paragraph(props: ProseProps) {
  return (
    <Text
      mb={proseSpacing}
      lineHeight='7'
      {...props}
    />
  );
}



