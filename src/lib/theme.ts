/* theme.ts - Chakra UI theme configs */
import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';
import type { ThemeConfig } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('white', '#202023')(props),
    },
  }),
};

const components = {
  Link: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const theme = extendTheme({
  config,
  styles,
  components,
});

export default theme;
