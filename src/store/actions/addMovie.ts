import { AppDispatch } from "../store";
import { IMovie } from "../../interfaces/IMovie";
import { api } from "../movies.service";
import {
  ADD_MOVIE_ERROR,
  ADD_MOVIE_STARTED,
  ADD_MOVIE_SUCCESS,
  AddMovieActionType,
  ADD_MOVIE_FINISHED,
} from "../types/addMovie";

export const addMovie = (movieData: IMovie) => async (
  dispatch: AppDispatch
) => {
  dispatch(addMovieStarted());

  try {
    const response = await api.addMovie(movieData);
    dispatch(addMovieSuccess(response.data));
  } catch (error) {
    dispatch(addMovieError(error));
  }
};

export const addMovieFinished = (): AddMovieActionType => ({
  type: ADD_MOVIE_FINISHED,
});

const addMovieStarted = (): AddMovieActionType => ({
  type: ADD_MOVIE_STARTED,
});

const addMovieSuccess = (movies: IMovie): AddMovieActionType => ({
  type: ADD_MOVIE_SUCCESS,
  payload: movies,
});

const addMovieError = (error: Error): AddMovieActionType => ({
  type: ADD_MOVIE_ERROR,
  error: error,
});
