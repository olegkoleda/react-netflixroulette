import React, { useState } from "react";
import { StyledOptionsButton } from "./styled.optionsButton";
import CustomModal from "../Modal";

const DeleteMovie = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <StyledOptionsButton onClick={toggleModal}>
        Delete movie
      </StyledOptionsButton>
      <CustomModal
        title={"Delete movie"}
        isOpen={isOpen}
        toggleModal={toggleModal}
      >
        Delete Movie!
      </CustomModal>
    </>
  );
};

export default DeleteMovie;
