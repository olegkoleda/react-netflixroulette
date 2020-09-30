import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ModalProvider } from "styled-react-modal";
import ErrorBoundary from "./components/ErrorBoundary";
import { theme } from "./styles/Theme";
import ContentContainer from "./components/ContentContainer";

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <GlobalStyle />
          <ContentContainer />
        </ModalProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
