import { AppDispatch } from "../store";
import { IMovie } from "../../interfaces/IMovie";
import { api } from "../movies.service";
import {
  UPDATE_MOVIE_ERROR,
  UPDATE_MOVIE_STARTED,
  UPDATE_MOVIE_SUCCESS,
  UpdateMovieActionType,
  UPDATE_MOVIE_FINISHED,
} from "../types/updateMovie";

export const updateMovie = (movieData: IMovie) => async (
  dispatch: AppDispatch
) => {
  dispatch(updateMovieStarted());

  try {
    const response = await api.updateMovie(movieData);
    dispatch(updateMovieSuccess(response.data));
  } catch (error) {
    dispatch(updateMovieError(error));
  }
};

export const updateMovieFinished = (): UpdateMovieActionType => ({
  type: UPDATE_MOVIE_FINISHED,
});

const updateMovieStarted = (): UpdateMovieActionType => ({
  type: UPDATE_MOVIE_STARTED,
});

const updateMovieSuccess = (movie: IMovie): UpdateMovieActionType => ({
  type: UPDATE_MOVIE_SUCCESS,
  payload: movie,
});

const updateMovieError = (error: Error): UpdateMovieActionType => ({
  type: UPDATE_MOVIE_ERROR,
  error: error,
});
