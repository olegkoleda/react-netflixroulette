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
  movies: IMovie[];
  loading: boolean;
  isMovieOperationFinished: boolean;
  error: Error | null;
  activeMovie: number | null;
}

const initialState: IMoviesState = {
  movies: [],
  loading: false,
  error: null,
  activeMovie: null,
  isMovieOperationFinished: false,
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
        movies: action.payload,
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
    case ADD_MOVIE_FINISHED:
    case UPDATE_MOVIE_FINISHED:
      return {
        ...state,
        isMovieOperationFinished: false,
      };
    case ADD_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        isMovieOperationFinished: true,
        movies: [action.payload, ...state.movies],
      };
    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: state.movies.filter(({ id }) => id !== action.payload),
      };
    case UPDATE_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        isMovieOperationFinished: true,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id ? action.payload : movie
        ),
      };
    default:
      return state;
  }
}
