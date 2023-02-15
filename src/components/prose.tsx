import { ReactNode } from 'react';

import {
  chakra, 
  ChakraProps,
  Text,
  Code,
  Divider,
  LinkProps,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';


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

export function Anchor(props: LinkProps) {
  const {children, href, isExternal, ...rest} = props;
  const isExternalUrl = href ? !href.startsWith('/') : false;

  return (
    <Link href={href} isExternal={isExternalUrl} {...rest}>
      {children}
      {isExternalUrl ? <>{' '}<ExternalLinkIcon /></> : '' }
    </Link>
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



