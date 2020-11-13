import React, { useEffect } from "react";
import { NextPageContext } from "next";
import Footer from "../../components/Footer";
import HeaderSearch from "../../components/HeaderSearch";
import Main from "../../components/Main";
import { loadMovies } from "../../store/actions/loadMovies";
import { setSearchQuery } from "../../store/actions/searchMovie";
import { IAppState } from "../../store/reducers/rootReducer";
import { connect, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { IMovie } from "../../interfaces/IMovie";
import Head from "next/head";

interface ISearchPageProps {
  noFetch: boolean;
  movies: IMovie[];
}

function SearchPage({ noFetch, movies }: ISearchPageProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    query: { search },
  } = router;

  useEffect(() => {
    if (!noFetch) {
      dispatch(loadMovies());
    }
  }, [search]);

  return (
    <>
      <Head>
        <title>Netflix roulette | Search results</title>
      </Head>
      <HeaderSearch />
      <Main movies={movies} />
      <Footer />
    </>
  );
}

interface SearchPageNextContext extends NextPageContext {
  query: {
    search: string;
  };
}

SearchPage.getInitialProps = async ({
  store,
  query,
  req,
}: SearchPageNextContext) => {
  if (!req) {
    return { searchQuery: null };
  }

  store.dispatch(setSearchQuery(query.search));
  await store.dispatch(loadMovies());

  return {
    noFetch: true,
  };
};

const mapStateToProps = (state: IAppState) => ({
  movies: state.movies.list,
});

export default connect(mapStateToProps)(SearchPage);
