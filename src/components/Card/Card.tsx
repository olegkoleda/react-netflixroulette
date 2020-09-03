import React from "react";
import styled from "styled-components";
import { Composition, Box } from "atomic-layout";
import CardOptions from "../CardOptions";

interface CardProps {
  imageUrl: string;
  title: string;
  genre: string;
  releaseDate: string;
}

const CardStyle = styled.div`
  height: 33rem;
  color: ${(props) => props.theme.colour.grey};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  position: relative;

  &:hover {
    .card-icon {
      display: block;
    }
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
`;

const Year = styled.span`
  padding: 0.3rem 1rem;
  border-radius: 0.3125rem;
  border: 0.0125rem solid ${(props) => props.theme.colour.grey};
`;

const Genre = styled.span`
  font-size: 0.875rem;
`;

export const Card = ({ title, imageUrl, releaseDate, genre }: CardProps) => {
  const releaseYear = new Date(releaseDate).getFullYear();
  return (
    <Composition as={CardStyle} templateRows={"28.75rem 1fr"}>
      <ImageWrapper>
        <CardOptions />
        <a href="#">
          <Image src={imageUrl} alt={title} />
        </a>
      </ImageWrapper>
      <div>
        <Box
          flex
          justifyContent={"space-between"}
          marginTop={"1.5rem"}
          marginBottom={"0.5rem"}
        >
          <Title>{title}</Title>
          <Year>{releaseYear}</Year>
        </Box>
        <Genre>{genre}</Genre>
      </div>
    </Composition>
  );
};
