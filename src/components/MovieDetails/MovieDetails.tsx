import React from "react";
import { Box, Composition } from "atomic-layout";
import Heading from "../Heading";
import {
  StyledImage,
  StyledRating,
  StyledTagLine,
  StyledAccent,
} from "./styled.movieDetail";
import { IMovie } from "../../interfaces/IMovie";

interface IMovieDetails {
  data: IMovie;
}

const MovieDetails: React.FC<IMovieDetails> = ({ data }) => {
  const {
    title = "Default title",
    tagline = "Default tagline",
    vote_average = 5,
    release_date = "2019",
    poster_path = "#",
    overview = "default",
    runtime = 123,
  } = data;

  const releaseDate = new Date(release_date).getFullYear();

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

export default MovieDetails;
