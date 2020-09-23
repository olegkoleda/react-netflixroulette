import styled from "styled-components";
import { IProps } from "./Logo";

export const StyledLogo = styled.span<IProps>`
  font-weight: ${(props) => props.fontWeight};
  font-size: 1.5rem;
  color: ${(props) => props.theme.color.red};
`;
