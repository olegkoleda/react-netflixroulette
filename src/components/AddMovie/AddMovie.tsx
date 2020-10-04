import React, { useCallback } from "react";
import Button from "../Button";
import CustomModal from "../Modal";
import MovieForm from "../MovieForm";
import { useToggle } from "../../hooks/useToggle";
import { addMovie, addMovieFinished } from "../../store/actions/addMovie";
import { IMovie } from "../../interfaces/IMovie";
import { connect } from "react-redux";
import { IMoviesState } from "../../store/reducers/moviesReducer";
import MovieAdded from "../MovieAdded";

interface IAddMovieProps {
  addMovieProp: Function;
  addMovieFinishProp: Function;
  isMovieAddedProp: boolean;
}

const AddMovie: React.FC<IAddMovieProps> = ({
  addMovieProp,
  addMovieFinishProp,
  isMovieAddedProp,
}) => {
  const [isOpen, setIsOpen] = useToggle(false);

  const closeModal = useCallback(() => {
    setIsOpen();
    addMovieFinishProp();
  }, [isOpen]);

  return (
    <>
      <Button feature onClick={setIsOpen}>
        + ADD MOVIE
      </Button>
      <CustomModal title={"Add movie"} isOpen={isOpen} toggleModal={closeModal}>
        {isMovieAddedProp ? (
          <MovieAdded />
        ) : (
          <MovieForm callback={addMovieProp} />
        )}
      </CustomModal>
    </>
  );
};

const mapDispatch = {
  addMovieProp: (data: IMovie) => addMovie(data),
  addMovieFinishProp: () => addMovieFinished(),
};

const mapState = (state: IMoviesState) => ({
  isMovieAddedProp: state.isMovieOperationFinished,
});

export default connect(mapState, mapDispatch)(AddMovie);
