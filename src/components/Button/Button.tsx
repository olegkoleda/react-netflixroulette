import React from "react";
import { StyledButton } from "./styled.button";
export interface ButtonProps {
  secondary?: boolean;
  feature?: boolean;
  children?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const Button = (props: ButtonProps) => (
  <StyledButton {...props}>{props.children}</StyledButton>
);

export default Button;
