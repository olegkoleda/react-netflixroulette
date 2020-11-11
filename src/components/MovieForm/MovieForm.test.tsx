import React from "react";
import MovieForm from "./MovieForm";
import { renderWithTheme } from "../../testHelpers";

const callback = jest.fn();

test("MovieForm component matches the Snapshot", () => {
  const component = renderWithTheme(<MovieForm submitCallback={callback} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
