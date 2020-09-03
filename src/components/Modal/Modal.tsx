import React, { useState, ReactNode } from "react";
import styled from "styled-components";
import Modal, { BaseModalBackground } from "styled-react-modal";

interface IModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  children: ReactNode;
  afterOpen?: () => void;
  beforeClose?: () => void;
  title?: string;
}

const StyledModal = Modal.styled`
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

const CloseButton = styled.button`
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

export const CustomModal = ({
  isOpen,
  toggleModal,
  afterOpen,
  beforeClose,
  children,
  title,
}: IModalProps) => {
  return (
    <StyledModal
      isOpen={isOpen}
      afterOpen={afterOpen}
      beforeClose={beforeClose}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
    >
      <CloseButton onClick={toggleModal}>
        <span>+</span>
      </CloseButton>

      <span>{title ? title : ""}</span>
      {children}
    </StyledModal>
  );
};
