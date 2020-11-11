import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IMovie } from "../../interfaces/IMovie";
import { loadMovies } from "../../store/actions/loadMovies";
import { setSearchQuery } from "../../store/actions/searchMovie";
import { IAppState } from "../../store/reducers/rootReducer";
import Header from "../Header";
import Main from "../Main";
import { RouteComponentProps } from "../MovieDetails/MovieDetails";

interface MatchParams {
  query: string;
}
interface IDefaultPageProps extends RouteComponentProps<MatchParams> {
  movies: IMovie[];
  loadMoviesProp: Function;
  setSearchQueryProp: Function;
}

const DefaultPage: React.FC<IDefaultPageProps> = (props) => {
  const searchQuery = props.match.params.query;

  useEffect(() => {
    props.setSearchQueryProp(searchQuery);
    searchQuery && props.loadMoviesProp();
  }, [searchQuery]);

  return (
    <>
      <Header />
      <Main movies={props.movies} />
    </>
  );
};

const mapStateToProps = (state: IAppState) => ({
  movies: state.movies.list,
});

const mapDispatchToProps = {
  loadMoviesProp: () => loadMovies(),
  setSearchQueryProp: (query: string) => setSearchQuery(query),
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);
