import ContentContainer from "./ContentContainer";
import { renderWithTheme, reduxWrapper } from "../../testHelpers";

test("ContentContainer renders correctly", () => {
  const component = renderWithTheme(reduxWrapper(ContentContainer));

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
