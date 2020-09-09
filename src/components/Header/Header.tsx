import React from "react";
import { StyledBackground, StyledHeaderImage } from "./styled.header";
import { Box } from "atomic-layout";
import Logo from "../Logo";
import Heading from "../Heading";
import AddMovie from "../AddMovie";
import Search from "../Search";
import headerImgSrc from "../../assets/header-image.jpg";

const Header = () => {
  return (
    <Box
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
        <AddMovie />
      </Box>
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
    </Box>
  );
};

export default Header;
