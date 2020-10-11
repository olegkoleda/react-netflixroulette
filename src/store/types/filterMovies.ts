export const SET_MOVIE_FILTER = "SET_MOVIE_FILTER";

interface ISetMovieFilter {
  type: typeof SET_MOVIE_FILTER;
  payload: string;
}

export type FilterMovieActionType = ISetMovieFilter;
