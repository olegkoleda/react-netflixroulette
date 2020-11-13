import { api } from "../movies.service";
import { IMovie } from "../../interfaces/IMovie";
import {
  ISetActiveMovie,
  LoadMovieActionType,
  LoadMoviesActionType,
  LOAD_MOVIES_ERROR,
  LOAD_MOVIES_STARTED,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIE_ERROR,
  LOAD_MOVIE_STARTED,
  LOAD_MOVIE_SUCCESS,
  SET_ACTIVE_MOVIE,
} from "../types/loadMovies";
import { AppDispatch } from "../store";

export const loadMovies = () => async (
  dispatch: AppDispatch,
  getState: Function
) => {
  const state = getState();

  const params = {
    sortBy: state.params.sortBy,
    sortOrder: "desc",
    filter: state.params.filter,
    limit: 20,
    searchBy: 'title',
    search: state.params.search,
  };

  dispatch(loadMoviesStarted());

  try {
    const response = await api.loadMovies(params);
    dispatch(loadMoviesSuccess(response.data.data));
  } catch (error) {
    dispatch(loadMoviesError(error));
  }
};

export const loadMovieById = (id: number) => async (
  dispatch: AppDispatch
) => {

  dispatch(loadMovieStarted());

  try {
    const response = await api.loadMovieById(id);
    dispatch(loadMovieSuccess(response.data));
  } catch (error) {
    dispatch(loadMovieError(error));
  }
};

const loadMoviesStarted = (): LoadMoviesActionType => ({
  type: LOAD_MOVIES_STARTED,
});

const loadMoviesSuccess = (movies: IMovie[]): LoadMoviesActionType => ({
  type: LOAD_MOVIES_SUCCESS,
  payload: movies,
});

const loadMoviesError = (error: Error): LoadMoviesActionType => ({
  type: LOAD_MOVIES_ERROR,
  error: error,
});

const loadMovieStarted = (): LoadMovieActionType => ({
  type: LOAD_MOVIE_STARTED,
});

const loadMovieSuccess = (movie: IMovie): LoadMovieActionType => ({
  type: LOAD_MOVIE_SUCCESS,
  payload: movie,
});

const loadMovieError = (error: Error): LoadMovieActionType => ({
  type: LOAD_MOVIE_ERROR,
  error: error,
});

export const setActiveMovie = (id: number | string | null): ISetActiveMovie => ({
  type: SET_ACTIVE_MOVIE,
  payload: id,
});
