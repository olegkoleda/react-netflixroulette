import styled from "styled-components";

export const StyledOptionsButton = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  padding: 0.5rem;
  color: ${(props) => props.theme.color.white};

  &:hover {
    background: ${(props) => props.theme.color.red};
  }
`;
