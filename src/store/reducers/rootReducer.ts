import { combineReducers } from "redux";
import { IParamsState } from "./paramsReducer";
import { IMoviesState } from "./moviesReducer";
import movies from "./moviesReducer";
import params from "./paramsReducer";

export default combineReducers({
  movies,
  params,
});

export interface IAppState {
  movies: IMoviesState;
  params: IParamsState;
}
