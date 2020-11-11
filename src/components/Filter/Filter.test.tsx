import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Filter from "./Filter";
import { renderWithTheme } from "../../testHelpers";
import { initialAppState } from "../../store/reducers/rootReducer";
import { mockedData } from "../Main/Main";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);
const store = mockStore(initialAppState);

test("Filters component matches the Snapshot", () => {
  const component = renderWithTheme(
    <Provider store={store}>
        <Filter filters={mockedData.filters} />
    </Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
