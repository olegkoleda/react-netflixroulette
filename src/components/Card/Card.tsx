import React from "react";
import { Composition, Box } from "atomic-layout";
import {
  StyledCard,
  StyledImage,
  StyledGenre,
  StyledImageWrapper,
  StyledTitle,
  StyledYear,
} from "./styled.card";
import CardOptions from "../CardOptions";

export interface CardProps {
  imageUrl: string;
  title: string;
  genre: string;
  releaseDate: string;
}

const Card = ({ title, imageUrl, releaseDate, genre }: CardProps) => {
  const releaseYear = new Date(releaseDate).getFullYear();
  return (
    <Composition as={StyledCard} templateRows={"28.75rem 1fr"}>
      <StyledImageWrapper>
        <CardOptions />
        <a href="#">
          <StyledImage src={imageUrl} alt={title} />
        </a>
      </StyledImageWrapper>
      <div>
        <Box
          flex
          justifyContent={"space-between"}
          marginTop={"1.5rem"}
          marginBottom={"0.5rem"}
        >
          <StyledTitle>{title}</StyledTitle>
          <StyledYear>{releaseYear}</StyledYear>
        </Box>
        <StyledGenre>{genre}</StyledGenre>
      </div>
    </Composition>
  );
};

export default Card;
