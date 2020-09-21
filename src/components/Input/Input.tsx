import React, { ReactElement } from "react";
import {
  StyledError,
  StyledInput,
  StyledLabel,
  StyledInputWrapper,
} from "./styled.input";

export interface IInputProps {
  children?: ReactElement;
  label?: string;
  type?: string;
  placeholder?: string;
  hasError?: boolean;
}
const Input: React.FC<IInputProps> = ({ label, type, placeholder }) => (
  <StyledInputWrapper>
    <StyledLabel>
      {label}
      <StyledInput type={type} placeholder={placeholder} />
    </StyledLabel>
    <StyledError>Error</StyledError>
  </StyledInputWrapper>
);

export default Input;
