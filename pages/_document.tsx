import { NextComponentType, NextPageContext } from 'next';
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps as NextDocumentProps,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

import { createGlobalStyle, ServerStyleSheet } from 'styled-components';

type DocumentProps = NextDocumentProps & DocumentInitialProps & {
  styleTags: JSX.Element[];
}

const Document: NextComponentType<NextPageContext, {}, DocumentProps> = ({ styleTags }) => {
  return (
    <Html>
      <Head>
        <title>Movie DB</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

const getInitialProps = async ({ renderPage }: DocumentContext) => {
  const sheet = new ServerStyleSheet();

  const page = renderPage(App => props => (
    sheet.collectStyles(<App {...props} />)
  ));

  const styleTags = sheet.getStyleElement();

  return { ...page, styleTags };
}

Document.getInitialProps = getInitialProps;

export default Document;

