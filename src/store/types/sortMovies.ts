export const SET_MOVIE_SORT = "SET_MOVIE_SORT";

interface ISetMovieSort {
  type: typeof SET_MOVIE_SORT;
  payload: string;
}

export type SortMovieActionType = ISetMovieSort;
