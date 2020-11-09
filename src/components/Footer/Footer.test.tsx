import React from "react";
import Footer from "./Footer";
import renderer from "react-test-renderer";
import { theme } from "../../styles/Theme";
import { ThemeProvider } from "styled-components";

test("FooterSection matches the Snapshot", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
