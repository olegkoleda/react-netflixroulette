import { AppDispatch } from "../store";
import { FilterMovieActionType, SET_MOVIE_FILTER } from "../types/filterMovies";

export const filterMovie = (filter: string) => (dispatch: AppDispatch) => {
  dispatch(setMovieFilter(filter));
};

export const setMovieFilter = (filter: string): FilterMovieActionType => ({
  type: SET_MOVIE_FILTER,
  payload: filter,
});
