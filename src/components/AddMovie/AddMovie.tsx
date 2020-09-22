import React, { useState } from "react";
import Button from "../Button";
import CustomModal from "../Modal";
import MovieForm from "../MovieForm";
import { useToggle } from "../../hooks/useToggle";

const AddMovie = () => {
  const [isOpen, setIsOpen] = useToggle(false);

  return (
    <>
      <Button feature onClick={setIsOpen}>
        + ADD MOVIE
      </Button>
      <CustomModal title={"Add movie"} isOpen={isOpen} toggleModal={setIsOpen}>
        <MovieForm />
      </CustomModal>
    </>
  );
};

export default AddMovie;
