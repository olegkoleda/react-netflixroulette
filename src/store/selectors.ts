import { IAppState } from "./reducers/rootReducer";

export const getMovie = (
  state: IAppState,
  movieId = state.movies.activeMovie
) => {
  return state.movies.list.find(({ id }) => id === movieId) || null;
};
