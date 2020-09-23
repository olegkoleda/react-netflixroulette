import styled from "styled-components";

export const StyledSelectWrapper = styled.div`
  padding: 0.7rem;
  text-align: right;
`;

export const StyledLabel = styled.label`
  margin-right: 1rem;
  color: ${(props) => props.theme.color.grey};
`;

export const StyledOption = styled.option`
  background: ${(props) => props.theme.color.black};
  &:checked {
    background: ${(props) => props.theme.color.red};
    color: ${(props) => props.theme.color.white};
  }
`;

export const StyledSelect = styled.select`
  background: none;
  border: none;
  color: ${(props) => props.theme.color.white};
  font-size: 1rem;
`;
