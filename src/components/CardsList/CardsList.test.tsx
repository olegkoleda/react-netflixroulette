import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import CardsList from "./CardsList";
import { renderWithTheme } from "../../testHelpers";
import { movies } from "../../movies";
import { initialAppState } from "../../store/reducers/rootReducer";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);
const store = mockStore(initialAppState);

test("Cards list matches the Snapshot", () => {
  const component = renderWithTheme(
    <Provider store={store}>
      <Router>
        <CardsList data={movies} />
      </Router>
    </Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
