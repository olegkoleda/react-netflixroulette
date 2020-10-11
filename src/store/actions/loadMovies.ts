import { api } from "../movies.service";
import { IMovie } from "../../interfaces/IMovie";
import {
  ISetActiveMovie,
  LoadMovieActionType,
  LOAD_MOVIES_ERROR,
  LOAD_MOVIES_STARTED,
  LOAD_MOVIES_SUCCESS,
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
  };

  dispatch(loadMoviesStarted());

  try {
    const response = await api.loadMovies(params);
    dispatch(loadMoviesSuccess(response.data.data));
  } catch (error) {
    dispatch(loadMoviesError(error));
  }
};

const loadMoviesStarted = (): LoadMovieActionType => ({
  type: LOAD_MOVIES_STARTED,
});

const loadMoviesSuccess = (movies: IMovie[]): LoadMovieActionType => ({
  type: LOAD_MOVIES_SUCCESS,
  payload: movies,
});

const loadMoviesError = (error: Error): LoadMovieActionType => ({
  type: LOAD_MOVIES_ERROR,
  error: error,
});

export const setActiveMovie = (id: number | null): ISetActiveMovie => ({
  type: SET_ACTIVE_MOVIE,
  payload: id,
});
