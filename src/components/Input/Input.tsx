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
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<IInputProps> = ({
  label,
  type,
  placeholder,
  hasError,
  value,
  onChange,
}) => (
  <StyledInputWrapper>
    <StyledLabel>
      {label}
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </StyledLabel>
    {hasError && <StyledError>Error</StyledError>}
  </StyledInputWrapper>
);

export default Input;
