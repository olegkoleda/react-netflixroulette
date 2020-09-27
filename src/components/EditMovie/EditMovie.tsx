import React from "react";
import { StyledOptionsButton } from "../DeleteMovie/styled.optionsButton";
import CustomModal from "../Modal";
import MovieForm from "../MovieForm";
import { IMovieId } from "../../interfaces/IMovie";
import { useToggle } from "../../hooks/useToggle";

const EditMovie: React.FC<IMovieId> = ({ id }) => {
  const [isOpen, setIsOpen] = useToggle(false);

  return (
    <>
      <StyledOptionsButton onClick={setIsOpen}>Edit movie</StyledOptionsButton>
      <CustomModal title={"Edit movie"} isOpen={isOpen} toggleModal={setIsOpen}>
        <MovieForm movieId={id} />
      </CustomModal>
    </>
  );
};

export default EditMovie;
