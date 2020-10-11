import {
  LOAD_MOVIES_ERROR,
  LOAD_MOVIES_STARTED,
  LOAD_MOVIES_SUCCESS,
  SET_ACTIVE_MOVIE,
  LoadMovieActionType,
  ISetActiveMovie,
} from "../types/loadMovies";
import {
  ADD_MOVIE_ERROR,
  ADD_MOVIE_STARTED,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FINISHED,
  AddMovieActionType,
} from "../types/addMovie";
import {
  DELETE_MOVIE_ERROR,
  DELETE_MOVIE_STARTED,
  DELETE_MOVIE_SUCCESS,
  DeleteMovieActionType,
} from "../types/deleteMovie";
import { IMovie } from "../../interfaces/IMovie";
import {
  UPDATE_MOVIE_ERROR,
  UPDATE_MOVIE_STARTED,
  UPDATE_MOVIE_SUCCESS,
  UpdateMovieActionType,
  UPDATE_MOVIE_FINISHED,
} from "../types/updateMovie";

export interface IMoviesState {
  list: IMovie[];
  loading: boolean;
  isMovieUpdated: boolean;
  error: Error | null;
  activeMovie: number | null;
  isMovieAdded: boolean;
}

const initialState: IMoviesState = {
  list: [],
  loading: false,
  error: null,
  activeMovie: null,
  isMovieUpdated: false,
  isMovieAdded: false,
};

export default function moviesReducer(
  state = initialState,
  action:
    | LoadMovieActionType
    | ISetActiveMovie
    | AddMovieActionType
    | DeleteMovieActionType
    | UpdateMovieActionType
) {
  switch (action.type) {
    case LOAD_MOVIES_STARTED:
    case ADD_MOVIE_STARTED:
    case DELETE_MOVIE_STARTED:
    case UPDATE_MOVIE_STARTED:
      return {
        ...state,
        loading: true,
      };
    case LOAD_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case LOAD_MOVIES_ERROR:
    case ADD_MOVIE_ERROR:
    case DELETE_MOVIE_ERROR:
    case UPDATE_MOVIE_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case SET_ACTIVE_MOVIE:
      return {
        ...state,
        activeMovie: action.payload,
      };
    case UPDATE_MOVIE_FINISHED:
      return {
        ...state,
        isMovieUpdated: false,
      };
    case ADD_MOVIE_FINISHED:
      return {
        ...state,
        isMovieAdded: false,
      };
    case ADD_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        isMovieAdded: true,
        list: [action.payload, ...state.list],
      };
    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.filter(({ id }) => id !== action.payload),
      };
    case UPDATE_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        isMovieUpdated: true,
        list: state.list.map((movie) =>
          movie.id === action.payload.id ? action.payload : movie
        ),
      };
    default:
      return state;
  }
}
