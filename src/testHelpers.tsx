import React from "react";
import renderer from "react-test-renderer";
import { theme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";

export function renderWithTheme(component: React.ReactNode) {
  return renderer.create(
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  );
}
