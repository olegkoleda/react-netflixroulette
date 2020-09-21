import React, { useState } from "react";
import { StyledOptionsButton } from "../DeleteMovie/styled.optionsButton";
import CustomModal from "../Modal";
import MovieForm from "../MovieForm";
import { IMovieId } from "../../interfaces/IMovie";

const EditMovie: React.FC<IMovieId> = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <StyledOptionsButton onClick={toggleModal}>
        Edit movie
      </StyledOptionsButton>
      <CustomModal
        title={"Edit movie"}
        isOpen={isOpen}
        toggleModal={toggleModal}
      >
        <MovieForm movieId={id} />
      </CustomModal>
    </>
  );
};

export default EditMovie;
