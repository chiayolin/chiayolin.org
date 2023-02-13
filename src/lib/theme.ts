/* theme.ts - Chakra UI theme configs */
import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';
import type { ThemeConfig } from '@chakra-ui/react';
import { menuAnatomy } from '@chakra-ui/anatomy'
import {
  createMultiStyleConfigHelpers,
  StyleFunctionProps
} from '@chakra-ui/styled-system';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const colors = {
  darkBg: '#202023',
  lightBg: '#ffffff',
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('lightBg', 'darkBg')(props),
    },
    '[data-rehype-pretty-code-fragment]': {
      p: '2',
      w: '100%',
      mb: '5',
      borderRadius: 'md',
      backgroundColor: '#282C34',
    },
    '[data-rehype-pretty-code-fragment] code': {
      display: 'grid'
    }
  }),
};

// https://chakra-ui.com/docs/components/menu/theming
const {
  definePartsStyle,
  defineMultiStyleConfig
} = createMultiStyleConfigHelpers(menuAnatomy.keys)

const menuTheme = defineMultiStyleConfig({
  baseStyle: (props: StyleFunctionProps) => definePartsStyle({
    list: {
      bg: mode('lightBg', 'darkBg')(props),
    },
    item: {
      // disable :focus and :hover bg
      bg: mode('lightBg', 'darkBg')(props),
    }
  }),
});

const components = {
  Menu: menuTheme,
  Link: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: mode('#3d7aed', '#2997ff')(props),
      textUnderlineOffset: 3
    })
  },
}

const theme = extendTheme(
  {
    config,
    styles,
    colors,
    components,
  },
);

export default theme;
