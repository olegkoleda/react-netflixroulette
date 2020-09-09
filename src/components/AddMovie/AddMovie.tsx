import React, { useState } from "react";
import Button from "../Button";
import CustomModal from "../Modal";

const AddMovie = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Button feature onClick={toggleModal}>
        + ADD MOVIE
      </Button>
      <CustomModal isOpen={isOpen} toggleModal={toggleModal}>
        Add Movie modal
      </CustomModal>
    </>
  );
};

export default AddMovie;
