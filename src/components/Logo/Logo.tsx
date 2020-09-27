import React from "react";
import { StyledLogo } from "./styled.logo";

export interface IProps {
  fontWeight: number;
}

const Logo = () => (
  <span>
    <StyledLogo fontWeight={800}>netflix</StyledLogo>
    <StyledLogo fontWeight={400}>roulette</StyledLogo>
  </span>
);

export default Logo;
