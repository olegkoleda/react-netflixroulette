import styled from "styled-components";
import { IInputProps } from "./Input";

export const StyledInput = styled.input<IInputProps>`
  padding: 1rem;
  border: ${(props) =>
    props.hasError ? `1px solid ${props.theme.color.red}` : "none"};
  background-color: ${(props) => props.theme.color.darkgray};
  margin: 0.875rem 0 0;
  color: ${(props) => props.theme.color.white};
  font-size: 1rem;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.color.red};
  text-transform: uppercase;
`;

export const StyledError = styled.span`
  color: ${(props) => props.theme.color.red};
  font-size: 0.625rem;
`;

export const StyledInputWrapper = styled.div`
  margin-top: 1.2rem;
`;

export const StyledText = styled.span`
  margin: 0.875rem 0 0;
  color: ${(props) => props.theme.color.white};
  font-size: 1rem;
`;
