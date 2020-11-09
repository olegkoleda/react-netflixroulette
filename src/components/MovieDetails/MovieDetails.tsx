import React, { useEffect, useMemo } from "react";
import { Box, Composition } from "atomic-layout";
import Heading from "../Heading";
import {
  StyledImage,
  StyledRating,
  StyledTagLine,
  StyledAccent,
} from "./styled.movieDetail";
import { IMovie } from "../../interfaces/IMovie";
import { getMovie } from "../../store/selectors";
import { IAppState } from "../../store/reducers/rootReducer";
import { connect } from "react-redux";
import { loadMovieById, setActiveMovie } from "../../store/actions/loadMovies";
import * as H from "history";

export interface RouteComponentProps<P> {
  match: match<P>;
  location: H.Location;
  history: H.History;
  staticContext?: any;
}

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

interface MatchParams {
  id: string;
}
interface IMovieDetailsProps extends RouteComponentProps<MatchParams> {
  movie: IMovie;
  loadMovieProp: Function;
  setActiveProp: Function;
}

const MovieDetails: React.FC<IMovieDetailsProps> = (props) => {
  const {
    title = "Default title",
    tagline = "Default tagline",
    vote_average = 5,
    release_date = "2019",
    poster_path = "#",
    overview = "default",
    runtime = 123,
  } = props.movie || {};

  const activeMovieId = +props.match.params.id;

  const releaseDate = new Date(release_date).getFullYear();

  useEffect(() => {
    props.setActiveProp(activeMovieId);
    !props.movie && props.loadMovieProp(activeMovieId);
  }, [props.movie]);

  return (
    <Composition
      templateCols={"minmax(200px, 350px) 1fr"}
      gap={"1.5rem"}
      marginTop={"2rem"}
    >
      <div>
        <StyledImage src={poster_path} alt={""} />
      </div>
      <div>
        <Box flex alignItems={"center"}>
          <Heading as={"h2"}>{title}</Heading>
          <StyledRating>{vote_average}</StyledRating>
        </Box>
        <StyledTagLine>{tagline}</StyledTagLine>
        <Box flex marginVertical={"1.75rem"}>
          <StyledAccent>{releaseDate}</StyledAccent>
          <StyledAccent>{runtime} min</StyledAccent>
        </Box>
        <p>{overview}</p>
      </div>
    </Composition>
  );
};

const mapState = (state: IAppState, props: IMovieDetailsProps) => ({
  movie: getMovie(state, +props.match.params.id),
});

const mapDispatchToProps = {
  loadMovieProp: (id: number) => loadMovieById(id),
  setActiveProp: (id: number) => setActiveMovie(id),
};

export default connect(mapState, mapDispatchToProps)(MovieDetails);
