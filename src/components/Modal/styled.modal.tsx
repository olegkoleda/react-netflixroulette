import styled from "styled-components";
import Modal from "styled-react-modal";

export const StyledModal = Modal.styled`
  width: 30rem;
  min-height: 20rem;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #232323;
  transition: opacity ease 500ms;
  position: relative;
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 3rem;
  cursor: pointer;
  color: ${(props) => props.theme.colour.white};
  background: transparent;
  border: none;

  & span {
    transform: rotate(45deg);
    display: inline-block;
  }
`;
