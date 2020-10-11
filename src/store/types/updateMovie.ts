import { IMovie } from "../../interfaces/IMovie";

export const UPDATE_MOVIE_STARTED = "UPDATE_MOVIE_STARTED";
export const UPDATE_MOVIE_FINISHED = "UPDATE_MOVIE_FINISHED";
export const UPDATE_MOVIE_SUCCESS = "UPDATE_MOVIE_SUCCESS";
export const UPDATE_MOVIE_ERROR = "LOAD_MOVIES_ERROR";

interface IUpdateMovieStarted {
  type: typeof UPDATE_MOVIE_STARTED;
}

interface IUpdateMovieFinished {
  type: typeof UPDATE_MOVIE_FINISHED;
}

interface IUpdateMovieSuccess {
  type: typeof UPDATE_MOVIE_SUCCESS;
  payload: IMovie;
}

interface IUpdateMovieError {
  type: typeof UPDATE_MOVIE_ERROR;
  error: Error;
}

export type UpdateMovieActionType =
  | IUpdateMovieError
  | IUpdateMovieStarted
  | IUpdateMovieSuccess
  | IUpdateMovieFinished;
