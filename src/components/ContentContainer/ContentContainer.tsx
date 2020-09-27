import React, {
  SetStateAction,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import { Box, Composition } from "atomic-layout";
import { movies as mockData } from "../../movies";

const defaultMovie = {
  id: 181808,
  title: "React App",
  tagline: "The Saga Continues",
  vote_average: 7.1,
  vote_count: 4732,
  release_date: "2017-12-13",
  poster_path:
    "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  budget: 200000000,
  revenue: 1325937250,
  genres: ["Fantasy", "Adventure", "Science Fiction"],
  runtime: 152,
};

const ContentContainer: React.FC = () => {
  const [movieId, setMovieId] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const activeMovie = useMemo(
    () => mockData.find(({ id }) => id === movieId) || defaultMovie,
    [movieId]
  );

  useEffect(() => {
    document.title = showDetails ? activeMovie.title : "NetflixRoulette";
  }, [showDetails, activeMovie]);

  const changeMovie = (id: SetStateAction<null>) => {
    setMovieId(id);
    setShowDetails(true);
  };

  return (
    <Box >
      <Header
        showDetails={showDetails}
        movie={activeMovie}
        changeView={setShowDetails}
      />
      <Main movies={mockData} changeMovie={changeMovie} />
      <Footer />
    </Box>
  );
};

export default ContentContainer;
