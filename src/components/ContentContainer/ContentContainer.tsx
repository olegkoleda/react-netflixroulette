import React, { SetStateAction, useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import { Box } from "atomic-layout";
import { IMovie } from "../../interfaces/IMovie";
import { IAppState } from "../../store/reducers/rootReducer";
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

const mapStateToProps = (state: IAppState) => ({
  movies: state.movies.list,
  activeMovie: getMovie(state.movies.list, state.movies.activeMovie),
});

const mapDispatchToProps = {
  loadMoviesProp: () => loadMovies(),
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
