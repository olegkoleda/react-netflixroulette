import React from "react";
import { Composition } from "atomic-layout";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ModalProvider } from "styled-react-modal";
import ErrorBoundary from "./components/ErrorBoudary";
import { theme } from "./styles/Theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

const mobileAreas = `
  header
  main
  footer
`;

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <Composition areas={mobileAreas} templateRows="50vh 1fr 4.5rem">
            {(Areas) => (
              <>
                <GlobalStyle />
                <Areas.Header>
                  <Header />
                </Areas.Header>
                <Areas.Main as="main">
                  <Main />
                </Areas.Main>
                <Areas.Footer as="footer">
                  <Footer />
                </Areas.Footer>
              </>
            )}
          </Composition>
        </ModalProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
