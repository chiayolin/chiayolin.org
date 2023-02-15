import type { MDXComponents } from 'mdx/types';
import {
  Heading,
  UnorderedList,
  ListItem,
  OrderedList,
  Link,
  Image,
} from '@chakra-ui/react';

import {
  proseSpacing,
  Blockquote,
  Codeblock,
  Hr,
  Paragraph,
  Anchor,
} from '@/components/prose';

const headingStyle = {
  fontWeight: 'medium',
  mb: proseSpacing,
}

const listStyle = {
  mb: proseSpacing,
}

// markdown to chakra based on: https://mdxjs.com/table-of-components/
const Components: MDXComponents = {
  a:  (props) => <Anchor {...props} />,
  blockquote: Blockquote,
  code: Codeblock,
  h1: (props) => <Heading size='2xl' {...headingStyle} {...props} />,
  h2: (props) => <Heading size='xl'  {...headingStyle} {...props} />,
  h3: (props) => <Heading size='lg'  {...headingStyle} {...props} />,
  h4: (props) => <Heading size='md'  {...headingStyle} {...props} />,
  h5: (props) => <Heading size='sm'  {...headingStyle} {...props} />,
  h6: (props) => <Heading size='xs'  {...headingStyle} {...props} />,
  hr: (props) => <Hr {...props} />,
  img: (props) => {
    const {alt, ...rest} = props;
    return (
      <Image
        alt={alt || ''}
        display='inline-block'
        borderRadius='lg'
        {...rest}
      />
    );
  },
  ol: (props) => <OrderedList {...listStyle} {...props} />,
  p:  (props) => <Paragraph {...props} />,
  ul: (props) => <UnorderedList {...listStyle} {...props} />,
  li: (props) => <ListItem ml='2' {...props} />,

}

export default Components;

