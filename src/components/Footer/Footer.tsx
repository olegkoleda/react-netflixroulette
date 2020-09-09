import React from "react";
import { StyledFooter } from "./styled.footer";
import { Box } from "atomic-layout";
import Logo from "../Logo";

const Footer = () => (
  <Box as={StyledFooter} flex justifyContent="center" alignItems="center">
    <Logo />
  </Box>
);

export default Footer;
