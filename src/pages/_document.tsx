import theme from '@/lib/theme'
import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.intialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
