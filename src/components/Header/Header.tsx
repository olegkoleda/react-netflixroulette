import React, { useCallback, useMemo, useState } from "react";
import { connect } from "react-redux";
import {
  StyledBackground,
  StyledHeaderImage,
  StyledHeaderWrapper,
} from "./styled.header";
import { Box } from "atomic-layout";
import Logo from "../Logo";
import Heading from "../Heading";
import AddMovie from "../AddMovie";
import Search from "../Search";
import MovieDetails from "../MovieDetails";
import headerImgSrc from "../../assets/header-image.jpg";
import { IMovie } from "../../interfaces/IMovie";
import Button from "../Button";
import { getMovie } from "../../store/selectors";
import { IAppState } from "../../store/reducers/rootReducer";
import { setActiveMovie } from "../../store/actions/loadMovies";

interface IHeaderProps {
  movie: IMovie;
  changeView: Function;
}

const HEADER_HEIGHT = {
  OPENED: 70,
  CLOSED: 50,
};

const Header: React.FC<IHeaderProps> = ({ movie, changeView }) => {
  const [headerHeight, setHeaderHeight] = useState(HEADER_HEIGHT.CLOSED);
  const showDetails = useMemo(() => !!movie, [movie]);

  let height = useMemo(() => `${headerHeight}vh`, [headerHeight]);

  const onEnter = useCallback(() => {
    movie && setHeaderHeight(HEADER_HEIGHT.OPENED);
  }, [movie]);

  const onLeave = useCallback(() => {
    setHeaderHeight(HEADER_HEIGHT.CLOSED);
  }, [movie]);

  const closeDetails = useCallback(() => {
    changeView(null);
  }, [movie]);

  return (
    <Box
      as={StyledHeaderWrapper}
      height={height}
      paddingHorizontal={"1rem"}
      paddingHorizontalMd={"3rem"}
      paddingVertical={"1rem"}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
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

const mapState = (state: IAppState) => ({
  movie: getMovie(state),
});

const mapDispatch = {
  changeView: (id: number | null) => setActiveMovie(id),
};

export default connect(mapState, mapDispatch)(Header);
