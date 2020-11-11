import React from "react";
import Footer from "./Footer";
import { renderWithTheme } from "../../testHelpers";

test("FooterSection matches the Snapshot", () => {
  const component = renderWithTheme(<Footer />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
