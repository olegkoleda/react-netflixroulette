import React, { useState } from "react";
import { StyledOptionsButton } from "../DeleteMovie/styled.optionsButton";
import CustomModal from "../Modal";

const EditMovie = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <StyledOptionsButton onClick={toggleModal}>Edit movie</StyledOptionsButton>
      <CustomModal
        title={"Edit movie"}
        isOpen={isOpen}
        toggleModal={toggleModal}
      >
        Edit Movie Fields
      </CustomModal>
    </>
  );
};

export default EditMovie;
