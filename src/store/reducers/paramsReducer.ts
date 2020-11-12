import { FilterMovieActionType, SET_MOVIE_FILTER } from "../types/filterMovies";
import { SET_MOVIE_SORT, SortMovieActionType } from "../types/sortMovies";
import { SET_SEARCH_QUERY, SearchQueryActionType } from "../types/searchMovie";

export interface IParamsState {
  filter: string;
  sortBy: string;
  search: string;
}

export const initialState: IParamsState = {
  filter: "",
  sortBy: "release_date",
  search: '',
};

export default function paramsReducer(
  state = initialState,
  action: FilterMovieActionType | SortMovieActionType | SearchQueryActionType
) {
  switch (action.type) {
    case SET_MOVIE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case SET_MOVIE_SORT:
      return {
        ...state,
        sortBy: action.payload,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
}
