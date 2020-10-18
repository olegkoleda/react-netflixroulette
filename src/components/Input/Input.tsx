import React, {  useMemo } from "react";
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
  const hasError = useMemo(() => !!(meta.touched && meta.error), [meta]);
  return (
    <StyledInputWrapper>
      <StyledLabel>
        {label}
        <StyledInput {...field} {...props} hasError={hasError} />
      </StyledLabel>
      {hasError && <StyledError>{meta.error}</StyledError>}
    </StyledInputWrapper>
  );
};

export default Input;
