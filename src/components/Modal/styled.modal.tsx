import styled from "styled-components";
import Modal from "styled-react-modal";

export const StyledModal = Modal.styled`
  width: 30rem;
  min-height: 20rem;
  max-height: 80vh;
  overflow-y: auto;
  font-size: 1.25rem;
  background-color: #232323;
  transition: opacity ease 500ms;
  position: relative;
  padding: 3rem;
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 0.5 rem;
  right: 1rem;
  font-size: 3rem;
  cursor: pointer;
  color: ${(props) => props.theme.color.white};
  background: transparent;
  border: none;

  & span {
    transform: rotate(45deg);
    display: inline-block;
  }
`;

export const StyledContent = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

export const StyledTitle = styled.h3`
  font-size: 2rem;
  margin: 2rem 0;
`;
