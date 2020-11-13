import React from "react";
import { ThemeProvider } from "styled-components";
import { wrapper } from "../store/store";
import ErrorBoundary from "../components/ErrorBoundary";
import { theme } from "../styles/Theme";
import { GlobalStyle } from "../styles/GlobalStyles";
import App from "next/app";
import { ModalProvider } from "styled-react-modal";
import { AppContextType } from "next/dist/next-server/lib/utils";
import { Router } from "next/dist/client/router";

interface IWrappedAppProps {
  Component: Function;
  pageProps?: Object;
}

function WrappedApp({ Component, pageProps }: IWrappedAppProps) {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </ModalProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

WrappedApp.getInitialProps = async (appContext: AppContextType<Router>) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = (await App.getInitialProps(appContext)) || {};

  return { ...appProps };
};

export default wrapper.withRedux(WrappedApp);
