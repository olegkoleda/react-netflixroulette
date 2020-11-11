import React, { useMemo } from "react";
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
import { Link } from "react-router-dom";

export interface ICardProps {
  imageUrl: string;
  title: string;
  genre: string[];
  releaseDate: string;
  id: number;
}

const Card: React.FC<ICardProps> = ({
  title,
  imageUrl,
  releaseDate,
  genre,
  id,
}) => {
  const releaseYear = useMemo(() => new Date(releaseDate).getFullYear(), [
    releaseDate,
  ]);

  return (
    <Composition as={StyledCard} templateRows={"28.75rem 1fr"}>
      <StyledImageWrapper>
        <CardOptions id={id} />
        <Link to={`/film/${id}`}>
          <StyledImage src={imageUrl} alt={title} />
        </Link>
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
        <StyledGenre>{genre.join(", ").trim()}</StyledGenre>
      </div>
    </Composition>
  );
};

export default Card;
