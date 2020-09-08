import React from "react";
import styled from "styled-components";

interface ButtonProps {
  secondary?: boolean;
  feature?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme.colour.red};
  border: 0.0125rem solid ${(props) => props.theme.colour.red};
  color: ${(props) => props.theme.colour.white};
  letter-spacing: 0.3125rem;
  border-radius: 0.3125rem;
  display: inline-block;
  cursor: pointer;
  padding: 1.125rem 2rem;
  text-decoration: none;
  font-size: 1rem;
  min-width: 11rem;

  ${(props) => {
    if (props.secondary) {
      return `
      background-color: ${props.theme.colour.black};
      border: 0.0125rem solid ${props.theme.colour.red};
      color: ${props.theme.colour.red};
      `;
    } else if (props.feature) {
      return `
      background-color: rgba(85, 85, 85, 0.5);
      border:none;
      color: ${props.theme.colour.red};
      padding: 0.75rem;
      letter-spacing: 0.125rem;
      min-width: auto;
      `;
    }
    return;
  }};

  &:hover,
  &:focus {
    transform: perspective(0.0625rem) scale(1.05);
  }
`;

// export const Button =() {

// }
