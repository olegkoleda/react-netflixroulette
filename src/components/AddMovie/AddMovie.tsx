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
import { IAppState } from "../../store/reducers/rootReducer";

interface IAddMovieProps {
  addMovieHandler: (data: IMovie) => void;
  addMovieFinishProp: Function;
  isMovieAddedProp: boolean;
}

const AddMovie: React.FC<IAddMovieProps> = ({
  addMovieHandler,
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
          <MovieForm submitCallback={addMovieHandler} />
        )}
      </CustomModal>
    </>
  );
};

const mapDispatch = {
  addMovieHandler: (data: IMovie) => addMovie(data),
  addMovieFinishProp: () => addMovieFinished(),
};

const mapState = (state: IAppState) => ({
  isMovieAddedProp: state.movies.isMovieAdded,
});

export default connect(mapState, mapDispatch)(AddMovie);
