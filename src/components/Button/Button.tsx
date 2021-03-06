import React from "react";
import { StyledButton } from "./styled.button";
export interface IButtonProps {
  secondary?: boolean;
  feature?: boolean;
  children?: React.ReactNode;
  type?: "submit" | "button";
  onClick?: () => void;
}

const Button = (props: IButtonProps) => (
  <StyledButton {...props}>{props.children}</StyledButton>
);

export default Button;
