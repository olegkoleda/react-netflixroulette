import styled from "styled-components";

export const StyledInput = styled.input.attrs((props) => ({
  placeholder: "What do you want to watch?",
}))`
  font-size: 1.5rem;
  padding-left: 1rem;
`;
