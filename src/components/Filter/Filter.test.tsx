// @ts-nocheck
import Filter from "./Filter";
import { renderWithTheme, reduxWrapper } from "../../testHelpers";
import { mockedData } from "../Main/Main";

test("Filters component renders correctly", () => {
  const component = renderWithTheme(
    reduxWrapper(Filter, { filters: mockedData.filters })
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
