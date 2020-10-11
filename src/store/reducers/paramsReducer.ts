import { FilterMovieActionType, SET_MOVIE_FILTER } from "../types/filterMovies";
import { SET_MOVIE_SORT, SortMovieActionType } from "../types/sortMovies";

export interface IParamsState {
  filter: string;
  sortBy: string;
}

const initialState: IParamsState = {
  filter: "",
  sortBy: "release_date",
};

export default function paramsReducer(
  state = initialState,
  action: FilterMovieActionType | SortMovieActionType
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

    default:
      return state;
  }
}
