import React, { ReactElement } from "react";
import { useField } from "formik";
import {
  StyledError,
  StyledInput,
  StyledLabel,
  StyledInputWrapper,
} from "./styled.input";

export interface IInputProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  hasError?: boolean;
}
const Input: React.FC<IInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <StyledInputWrapper>
      <StyledLabel>
        {label}
        <StyledInput {...field} {...props} hasError={!!(meta.touched && meta.error)}/>
      </StyledLabel>
      {meta.touched && meta.error && <StyledError>{meta.error}</StyledError>}
    </StyledInputWrapper>
  );
};

export default Input;
