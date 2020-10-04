import React, { useCallback, useEffect } from "react";
import { StyledOptionsButton } from "../DeleteMovie/styled.optionsButton";
import CustomModal from "../Modal";
import MovieForm from "../MovieForm";
import { IMovie, IMovieId } from "../../interfaces/IMovie";
import { useToggle } from "../../hooks/useToggle";
import { IAppState } from "../../store/reducers/rootReducer";
import { connect } from "react-redux";
import {
  updateMovie,
  updateMovieFinished,
} from "../../store/actions/updateMovie";
import { getMovie } from "../../store/selectors";

interface IEditMovieProps {
  movie: IMovie;
  updateMovieProp: Function;
  updateMovieFinishProp: Function;
  isMovieAddedProp: boolean;
}

const EditMovie: React.FC<IEditMovieProps> = ({
  updateMovieProp,
  movie,
  updateMovieFinishProp,
  isMovieAddedProp,
}) => {
  const [isOpen, setIsOpen] = useToggle(false);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    updateMovieFinishProp();
  }, [isOpen]);

  useEffect(() => {
    if (isMovieAddedProp) {
      closeModal();
    }
  }, [movie]);

  return (
    <>
      <StyledOptionsButton onClick={setIsOpen}>Edit movie</StyledOptionsButton>
      <CustomModal
        title={"Edit movie"}
        isOpen={isOpen}
        toggleModal={closeModal}
      >
        <MovieForm movieData={movie} callback={updateMovieProp} />
      </CustomModal>
    </>
  );
};

const mapDispatch = {
  updateMovieProp: (data: IMovie) => updateMovie(data),
  updateMovieFinishProp: () => updateMovieFinished(),
};

const mapState = (state: IAppState, props: IMovieId) => ({
  movie: getMovie(state.movies.list, props.id),
  isMovieAddedProp: state.movies.isMovieUpdated,
});

export default connect(mapState, mapDispatch)(EditMovie);
