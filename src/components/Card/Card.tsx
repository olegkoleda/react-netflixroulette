import React, { useCallback, useMemo } from "react";
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

export interface ICardProps {
  imageUrl: string;
  title: string;
  genre: string[];
  releaseDate: string;
  id: number;
  changeMovie: Function;
}

const Card: React.FC<ICardProps> = ({
  title,
  imageUrl,
  releaseDate,
  genre,
  id,
  changeMovie,
}) => {
  const releaseYear = useMemo(() => new Date(releaseDate).getFullYear(), [
    releaseDate,
  ]);

  const selectFilm = useCallback(() => {
    changeMovie(id);
  }, [id]);

  return (
    <Composition as={StyledCard} templateRows={"28.75rem 1fr"}>
      <StyledImageWrapper>
        <CardOptions id={id} />
        <a href="#" onClick={selectFilm}>
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
        <StyledGenre>{genre.join(", ").trim()}</StyledGenre>
      </div>
    </Composition>
  );
};

export default Card;
