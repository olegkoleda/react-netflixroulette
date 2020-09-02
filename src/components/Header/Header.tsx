import React from "react";
import styled from "styled-components";
import { Box } from "atomic-layout";
import Logo from "../Logo";
import Heading from "../Heading";
import Button from "../Button";
import Search from "../Search";
import headerImgSrc from "../../assets/header-image.jpg";

const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(4px);
  z-index: -1;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: rgba(0, 0, 0, 0.5);
`;

export const Header = () => {
  return (
    <Box
      height={"100%"}
      paddingHorizontal={"1rem"}
      paddingHorizontalMd={"3rem"}
      paddingVertical={"1rem"}
    >
      <HeaderImage src={headerImgSrc} alt={""} />
      <Background />
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
        <Button feature>+ ADD MOVIE</Button>
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
