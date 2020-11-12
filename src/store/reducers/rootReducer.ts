import { combineReducers } from "redux";
import { IParamsState } from "./paramsReducer";
import { IMoviesState } from "./moviesReducer";
import movies, { initialState as initialMovieState } from "./moviesReducer";
import params, { initialState as initialParamsState } from "./paramsReducer";

export default combineReducers({
  movies,
  params,
});

export interface IAppState {
  movies: IMoviesState;
  params: IParamsState;
}

export const initialAppState: IAppState = {
  movies: initialMovieState,
  params: initialParamsState,
}
