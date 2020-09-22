import React, { useCallback } from "react";
import { StyledBackground, StyledHeaderImage } from "./styled.header";
import { Box } from "atomic-layout";
import Logo from "../Logo";
import Heading from "../Heading";
import AddMovie from "../AddMovie";
import Search from "../Search";
import MovieDetails from "../MovieDetails";
import headerImgSrc from "../../assets/header-image.jpg";
import { IMovie } from "../../interfaces/IMovie";
import Button from "../Button";

interface IHeaderProps {
  showDetails: boolean;
  movie: IMovie;
  changeView: Function;
}

const Header: React.FC<IHeaderProps> = ({ showDetails, movie, changeView }) => {
  const closeDetails = useCallback(() => {
    changeView(false);
  }, [showDetails]);
  return (
    <Box
      as={"header"}
      height={"100%"}
      paddingHorizontal={"1rem"}
      paddingHorizontalMd={"3rem"}
      paddingVertical={"1rem"}
    >
      <StyledHeaderImage src={headerImgSrc} alt={""} />
      <StyledBackground />
      <Box
        flex
        justifyContent={"space-between"}
        as="header"
        flexDirectionMd={"row"}
        flexDirection={"column"}
      >
        <h1>
          <Logo />
        </h1>
        {showDetails ? (
          <Button onClick={closeDetails}>Back to search</Button>
        ) : (
          <AddMovie />
        )}
      </Box>
      {showDetails ? (
        <MovieDetails data={movie} />
      ) : (
        <Box
          flex
          flexDirection={"row"}
          alignItems={"center"}
          marginHorizontal={"6rem"}
          height={"100%"}
          marginTop={"-3rem"}
        >
          <Box width={"100%"}>
            <Heading as="h2">Find your movie</Heading>
            <Search />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Header;
