import React from "react";
import { NextPageContext } from "next";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import { loadMovieById, setActiveMovie } from "../../store/actions/loadMovies";
import { IAppState } from "../../store/reducers/rootReducer";
import { connect } from "react-redux";
import { IMovie } from "../../interfaces/IMovie";
import Header from "../../components/Header";
import Head from "next/head";

interface IMovieDetailProps {
  activeMovie: IMovie;
  movies: IMovie[];
}

function MovieDetail({ movies, activeMovie }: IMovieDetailProps) {
  return (
    <>
      <Head>
        <title>{activeMovie.title}</title>
      </Head>
      <Header />
      <Main movies={movies} />
      <Footer />
    </>
  );
}

interface MovieDetailNextContext extends NextPageContext {
  query: {
    id: string;
  };
}

MovieDetail.getInitialProps = async ({
  store,
  query,
  req,
}: MovieDetailNextContext) => {
  store.dispatch(setActiveMovie(+query.id));
  await store.dispatch(loadMovieById(+query.id));

  return {
    noFetch: true,
  };
};

const mapStateToProps = (state: IAppState) => ({
  movies: state.movies.list,
  activeMovie: state.movies.activeMovieData,
});

export default connect(mapStateToProps)(MovieDetail);
