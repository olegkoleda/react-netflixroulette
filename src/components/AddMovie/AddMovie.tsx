import React, { useState } from "react";
import Button from "../Button";
import CustomModal from "../Modal";
import Form from "./AddMovieForm";

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
      <CustomModal
        title={"Add movie"}
        isOpen={isOpen}
        toggleModal={toggleModal}
      >
        <Form />
      </CustomModal>
    </>
  );
};

export default AddMovie;
