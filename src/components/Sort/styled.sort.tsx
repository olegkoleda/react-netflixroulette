import styled from "styled-components";

export const StyledSelectWrapper = styled.div`
  padding: 0.7rem;
  text-align: right;
`;

export const StyledLabel = styled.label`
  margin-right: 1rem;
  color: ${(props) => props.theme.colour.grey};
`;

export const StyledOption = styled.option`
  background: ${(props) => props.theme.colour.black};
  &:checked {
    background: ${(props) => props.theme.colour.red};
    color: ${(props) => props.theme.colour.white};
  }
`;

export const StyledSelect = styled.select`
  background: none;
  border: none;
  color: ${(props) => props.theme.colour.white};
  font-size: 1rem;
`;
