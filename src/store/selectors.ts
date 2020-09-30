import { IMovie } from "../interfaces/IMovie";

export const getMovie = (movies: IMovie[], movieId: number | null) => {
  return movies.find(({ id }) => id === movieId) || null;
};
