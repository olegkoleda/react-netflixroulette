import React from "react";
import { Composition } from "atomic-layout";
import { GlobalStyle } from "./styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { theme } from './styles/Theme';
import headerImg from "./assets/header-image.jpg";
import "./style.scss";

const mobileAreas = `
  header
  main
  footer
`;

const StyledFooter = styled.div`
  background: ${props => props.theme.colour.dark};
  color: ${props => props.theme.colour.light};
`;

const StyledHeader = styled.div`
  background-image: url(${headerImg});
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Composition areas={mobileAreas} templateRows="100px 1fr 100px">
        {({ Header, Main, Footer }) => (
          <>
            <GlobalStyle />
            <Header as="header">
              <StyledHeader>
                <h1 className="heading">React intro</h1>
              </StyledHeader>
            </Header>
            <Main>
              <p>lorem ipsum dolor</p>
            </Main>
            <Footer>
              <StyledFooter>
                <p>Footer</p>
              </StyledFooter>
            </Footer>
          </>
        )}
      </Composition>
    </ThemeProvider>
  );
}
