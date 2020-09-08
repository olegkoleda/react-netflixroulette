import React from "react";
import styled from "styled-components";

const LogoFirsPart = styled.span`
  font-weight: 800;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colour.red};
`;

const LogoSecondPart = styled.span`
  font-weight: 400;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colour.red};
`;

export const Logo = () => (
  <span>
    <LogoFirsPart>netflix</LogoFirsPart>
    <LogoSecondPart>roulette</LogoSecondPart>
  </span>
);
