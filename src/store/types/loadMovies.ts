import { IMovie } from "../../interfaces/IMovie";

export const LOAD_MOVIES_STARTED = "LOAD_MOVIES_STARTED";
export const LOAD_MOVIES_SUCCESS = "LOAD_MOVIES_SUCCESS";
export const LOAD_MOVIES_ERROR = "LOAD_MOVIES_ERROR";
export const LOAD_MOVIE_STARTED = "LOAD_MOVIE_STARTED";
export const LOAD_MOVIE_SUCCESS = "LOAD_MOVIE_SUCCESS";
export const LOAD_MOVIE_ERROR = "LOAD_MOVIE_ERROR";
export const SET_ACTIVE_MOVIE = "SET_ACTIVE_MOVIE";

interface ILoadMoviesStarted {
  type: typeof LOAD_MOVIES_STARTED;
}

interface ILoadMoviesSuccess {
  type: typeof LOAD_MOVIES_SUCCESS;
  payload: IMovie[];
}

interface ILoadMoviesError {
  type: typeof LOAD_MOVIES_ERROR;
  error: Error;
}

interface ILoadMovieStarted {
  type: typeof LOAD_MOVIE_STARTED;
}

interface ILoadMovieSuccess {
  type: typeof LOAD_MOVIE_SUCCESS;
  payload: IMovie;
}

interface ILoadMovieError {
  type: typeof LOAD_MOVIE_ERROR;
  error: Error;
}

export interface ISetActiveMovie {
  type: typeof SET_ACTIVE_MOVIE;
  payload: number | null;
}


export type LoadMoviesActionType =
  | ILoadMoviesError
  | ILoadMoviesStarted
  | ILoadMoviesSuccess;

  export type LoadMovieActionType =
  | ILoadMovieError
  | ILoadMovieStarted
  | ILoadMovieSuccess;
