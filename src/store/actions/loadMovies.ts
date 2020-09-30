import axios from "axios";
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

const API_URL = "http://localhost:4000";

export const loadMovies = () => (dispatch: AppDispatch) => {
  dispatch(loadMoviesStarted());

  axios
    .get(`${API_URL}/movies`, { params: {} })
    .then((response) => dispatch(loadMoviesSuccess(response.data.data)))
    .catch((err) => dispatch(loadMoviesError(err)));
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
