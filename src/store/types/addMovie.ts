import { IMovie } from "../../interfaces/IMovie";

export const ADD_MOVIE_STARTED = "ADD_MOVIE_STARTED";
export const ADD_MOVIE_FINISHED = "ADD_MOVIE_FINISHED";
export const ADD_MOVIE_SUCCESS = "ADD_MOVIE_SUCCESS";
export const ADD_MOVIE_ERROR = "LOAD_MOVIES_ERROR";

interface IAddMovieStarted {
  type: typeof ADD_MOVIE_STARTED;
}

interface IAddMovieFinished {
  type: typeof ADD_MOVIE_FINISHED;
}

interface IAddMovieSuccess {
  type: typeof ADD_MOVIE_SUCCESS;
  payload: IMovie;
}

interface IAddMovieError {
  type: typeof ADD_MOVIE_ERROR;
  error: Error;
}

export type AddMovieActionType =
  | IAddMovieError
  | IAddMovieStarted
  | IAddMovieSuccess
  | IAddMovieFinished;
