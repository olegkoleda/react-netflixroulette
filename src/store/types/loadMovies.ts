import { IMovie } from "../../interfaces/IMovie";

export const LOAD_MOVIES_STARTED = "LOAD_MOVIES_STARTED";
export const LOAD_MOVIES_SUCCESS = "LOAD_MOVIES_SUCCESS";
export const LOAD_MOVIES_ERROR = "LOAD_MOVIES_ERROR";
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

export interface ISetActiveMovie {
  type: typeof SET_ACTIVE_MOVIE;
  payload: number | null;
}


export type LoadMovieActionType =
  | ILoadMoviesError
  | ILoadMoviesStarted
  | ILoadMoviesSuccess;
