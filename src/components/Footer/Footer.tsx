import React from "react";
import styled from "styled-components";
import { Box } from "atomic-layout";
import Logo from "../Logo";

const StyledFooter = styled.div`
  height: 100%;
  background: ${(props) => props.theme.colour.darkgray};
  text-align: center;
`;

export const Footer = () => (
  <Box as={StyledFooter} flex justifyContent="center" alignItems="center">
    <Logo />
  </Box>
);
