import React from "react";
import renderer from "react-test-renderer";
import { theme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { initialAppState } from "./store/reducers/rootReducer";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);
const store = mockStore(initialAppState);

export function renderWithTheme(component: React.ReactNode) {
  return renderer.create(
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  );
}

export const reduxWrapper = (Component: typeof React.Component | React.FC, data = {}) => (
  <Provider store={store}>
    <Router>
      <Component {...data}/>
    </Router>
  </Provider>
);
