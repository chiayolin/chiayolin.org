/* theme.ts - Chakra UI theme configs */
import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';
import type { ThemeConfig } from '@chakra-ui/react';
import { menuAnatomy } from '@chakra-ui/anatomy'
import {
  createMultiStyleConfigHelpers,
  StyleFunctionProps
} from '@chakra-ui/styled-system';

const darkModeBg = '#202023';
const lightModeBg = '#ffffff';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode(lightModeBg, darkModeBg)(props),
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
      bg: mode(lightModeBg, darkModeBg)(props),
    },
    item: {
      // disable :focus and :hover bg
      bg: mode(lightModeBg, darkModeBg)(props),
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
    components,
  },
);

export default theme;
