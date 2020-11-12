import CardsList from "./CardsList";
import { renderWithTheme, reduxWrapper } from "../../testHelpers";
import { movies } from "../../movies";

test("Cards list renders correctly", () => {
  const component = renderWithTheme(reduxWrapper(CardsList, { data: movies }));

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
