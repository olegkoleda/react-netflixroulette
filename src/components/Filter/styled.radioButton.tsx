import styled from "styled-components";

export const StyledRadioButton = styled.div<{ checked?: boolean }>`
  text-align: center;
  padding: 0.7rem;
  margin-right: 1.5rem;
  border-bottom: ${(props) =>
    props.checked ? `2px solid ${props.theme.color.red}` : ""};

  input[type="radio"] {
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
    position: absolute;
    width: 0.0625rem;
    height: 0.0625rem;

    &:focus {
      + label {
        outline: 0.125rem solid ${(props) => props.theme.color.white};
        outline-offset: 0.25rem;
      }
    }
  }

  label {
    cursor: pointer;
  }
`;
