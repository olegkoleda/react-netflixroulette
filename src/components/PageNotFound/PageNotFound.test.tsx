import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { renderWithTheme } from "../../testHelpers";

test("PageNotFound component matches the Snapshot", () => {
  const component = renderWithTheme(
    <Router>
      <PageNotFound />
    </Router>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
