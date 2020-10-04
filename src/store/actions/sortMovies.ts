import { AppDispatch } from "../store";
import { SortMovieActionType, SET_MOVIE_SORT } from "../types/sortMovies";

export const sortMovies = (param: string) => (dispatch: AppDispatch) => {
  dispatch(setMovieFilter(param));
};

export const setMovieFilter = (param: string): SortMovieActionType => ({
  type: SET_MOVIE_SORT,
  payload: param,
});
