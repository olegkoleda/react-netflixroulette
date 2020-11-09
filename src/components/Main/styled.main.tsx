import styled from "styled-components";

export const StyledMain = styled.main`
  height: 100%;
  min-height: calc(50vh - 6.5rem);
  background: ${(props) => props.theme.color.black};
`;

export const StyledResults = styled.div`
  margin: 1.875rem 0;
  font-size: 1.125rem;

  & span {
    font-weight: 600;
  }
`;
