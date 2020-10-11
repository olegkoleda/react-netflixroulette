import React, { useCallback } from "react";
import { Box } from "atomic-layout";
import { StyledOptionsButton } from "./styled.optionsButton";
import CustomModal from "../Modal";
import Button from "../Button";
import { useToggle } from "../../hooks/useToggle";
import { deleteMovie } from "../../store/actions/deleteMovie";
import { connect } from "react-redux";

interface IDeleteMovieProp {
  id: number;
  deleteMovieProp: Function;
}

const DeleteMovie: React.FC<IDeleteMovieProp> = ({ id, deleteMovieProp }) => {
  const [isOpen, setIsOpen] = useToggle(false);

  const deleteMovie = useCallback(() => {
    deleteMovieProp(id);
  }, [id]);

  return (
    <>
      <StyledOptionsButton onClick={setIsOpen}>
        Delete movie
      </StyledOptionsButton>
      <CustomModal
        title={"Delete movie"}
        isOpen={isOpen}
        toggleModal={setIsOpen}
      >
        <p>Are you sure you want to delete this movie?</p>
        <Box flex justifyContent={"flex-end"} marginTop={"1rem"}>
          <Button onClick={deleteMovie}>Confirm</Button>
        </Box>
      </CustomModal>
    </>
  );
};

const mapDispatch = {
  deleteMovieProp: (movieId: number) => deleteMovie(movieId),
};

export default connect(null, mapDispatch)(DeleteMovie);
