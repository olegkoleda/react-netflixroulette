import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Sort from "./Sort";
import { renderWithTheme } from "../../testHelpers";
import { initialAppState } from "../../store/reducers/rootReducer";
import { mockedData } from "../Main/Main";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);
const store = mockStore(initialAppState);

test("Sort component matches the Snapshot", () => {
  const component = renderWithTheme(
    <Provider store={store}>
        <Sort sortValues={mockedData.sort} />
    </Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
