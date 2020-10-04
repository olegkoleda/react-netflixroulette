import { FilterMovieActionType, SET_MOVIE_FILTER } from "../types/filterMovie";

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
  action: FilterMovieActionType
) {
  switch (action.type) {
    case SET_MOVIE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
}
