import { AppDispatch } from "../store";
import { api } from "../movies.service";
import {
  DELETE_MOVIE_ERROR,
  DELETE_MOVIE_STARTED,
  DELETE_MOVIE_SUCCESS,
  DeleteMovieActionType,
} from "../types/deleteMovie";


export const deleteMovie = (movieId: number) => async (
  dispatch: AppDispatch
) => {
  dispatch(deleteMovieStarted());

  try {
    await api.deleteMovie(movieId);
    dispatch(deleteMovieSuccess(movieId));
  } catch (error) {
    dispatch(deleteMovieError(error));
  }
};

const deleteMovieStarted = (): DeleteMovieActionType => ({
  type: DELETE_MOVIE_STARTED,
});

const deleteMovieSuccess = (movieId: number): DeleteMovieActionType => ({
  type: DELETE_MOVIE_SUCCESS,
  payload: movieId,
});

const deleteMovieError = (error: Error): DeleteMovieActionType => ({
  type: DELETE_MOVIE_ERROR,
  error: error,
});
