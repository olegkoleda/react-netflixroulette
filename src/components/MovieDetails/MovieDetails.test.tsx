// @ts-nocheck
import MovieDetails from "./MovieDetails";
import { renderWithTheme, reduxWrapper } from "../../testHelpers";

const match = {
  params: {
    id: 123,
  }
}
test("Cards list renders correctly", () => {
  const component = renderWithTheme(reduxWrapper(MovieDetails, {match}));

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
