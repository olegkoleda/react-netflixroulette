import HeaderSearch from "./HeaderSearch";
import { renderWithTheme, reduxWrapper } from "../../testHelpers";

test("Header component renders correctly", () => {
  const component = renderWithTheme(reduxWrapper(HeaderSearch));

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
