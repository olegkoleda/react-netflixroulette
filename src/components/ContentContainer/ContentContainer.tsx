import React, { SetStateAction, useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import { Box } from "atomic-layout";
import { IMovie } from "../../interfaces/IMovie";
import { IMoviesState } from "../../store/reducers/moviesReducer";
import { loadMovies } from "../../store/actions/loadMovies";
import { getMovie } from "../../store/selectors";

interface IProps {
  movies: IMovie[];
  activeMovie: IMovie;
  loadMoviesProp: Function;
}

const ContentContainer: React.FC<IProps> = ({
  movies,
  loadMoviesProp,
  activeMovie,
}) => {
  useEffect(() => {
    document.title = activeMovie ? activeMovie.title : "NetflixRoulette";
  }, [activeMovie]);

  useEffect(() => {
    loadMoviesProp();
  }, []);

  return (
    <Box>
      <Header />
      <Main movies={movies} />
      <Footer />
    </Box>
  );
};

const mapStateToProps = (state: IMoviesState) => ({
  movies: state.movies,
  activeMovie: getMovie(state.movies, state.activeMovie),
});

const mapDispatchToProps = {
  loadMoviesProp: () => loadMovies(),
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
