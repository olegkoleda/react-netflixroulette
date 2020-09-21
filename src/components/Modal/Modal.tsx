import React, { ReactNode } from "react";
import {
  StyledCloseButton,
  StyledModal,
  StyledTitle,
  StyledContent,
} from "./styled.modal";
interface IModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  children: ReactNode;
  afterOpen?: () => void;
  beforeClose?: () => void;
  title: string;
}

const CustomModal = ({
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
      <StyledCloseButton onClick={toggleModal}>
        <span>+</span>
      </StyledCloseButton>

      <StyledTitle>{title.toUpperCase()}</StyledTitle>
      <StyledContent>{children}</StyledContent>
    </StyledModal>
  );
};

export default CustomModal;
