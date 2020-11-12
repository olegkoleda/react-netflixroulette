import Header from "./Header";
import { renderWithTheme, reduxWrapper } from "../../testHelpers";

test("Header component renders correctly", () => {
  const component = renderWithTheme(reduxWrapper(Header));

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
