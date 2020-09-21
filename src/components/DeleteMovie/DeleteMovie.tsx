import React, { useState } from "react";
import { Box } from "atomic-layout";
import { StyledOptionsButton } from "./styled.optionsButton";
import CustomModal from "../Modal";
import { IMovieId } from "../../interfaces/IMovie";
import Button from "../Button";

const DeleteMovie: React.FC<IMovieId> = ({ id }) => {
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
        <p>Are you sure you want to delete this movie?</p>
        <Box flex justifyContent={"flex-end"} marginTop={"1rem"}>
          <Button>Confirm</Button>
        </Box>
      </CustomModal>
    </>
  );
};

export default DeleteMovie;
