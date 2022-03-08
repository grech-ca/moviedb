import { FC, Fragment } from 'react';

import { AppProps } from 'next/app'

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import 'typeface-roboto';

import { GlobalStyle, theme } from 'lib/theme';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;

