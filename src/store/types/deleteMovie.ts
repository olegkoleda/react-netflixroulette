export const DELETE_MOVIE_STARTED = "DELETE_MOVIE_STARTED";
export const DELETE_MOVIE_SUCCESS = "DELETE_MOVIE_SUCCESS";
export const DELETE_MOVIE_ERROR = "DELETE_MOVIE_ERROR";

interface IDeleteMovieStarted {
  type: typeof DELETE_MOVIE_STARTED;
}

interface IDeleteMovieSuccess {
  type: typeof DELETE_MOVIE_SUCCESS;
  payload: number;
}

interface IDeleteMovieError {
  type: typeof DELETE_MOVIE_ERROR;
  error: Error;
}

export type DeleteMovieActionType =
  | IDeleteMovieError
  | IDeleteMovieStarted
  | IDeleteMovieSuccess;
