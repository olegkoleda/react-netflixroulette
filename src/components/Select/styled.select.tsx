import styled from "styled-components";
import { IError } from "./Select";

export const StyledSelect = styled.div<IError>`
  .multi-select {
    color: ${(props) => props.theme.color.white};
    font-size: 1rem;
    margin: 0.875rem 0 0;
    text-transform: none;
    --rmsc-main: #4285f4;
    --rmsc-hover: ${(props) => props.theme.color.black};
    --rmsc-selected: ${(props) => props.theme.color.red};
    --rmsc-border: ${(props) =>
      props.hasError ? `1px solid ${props.theme.color.red}` : "none"};
    --rmsc-bg: ${(props) => props.theme.color.darkgray};
    --rmsc-p: 10px; /* Spacing */
    --rmsc-radius: 0; /* Radius */
    --rmsc-h: 3rem; /* Height */
  }
`;
