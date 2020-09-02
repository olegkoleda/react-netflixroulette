import React from "react";
import styled from "styled-components";
import { Composition } from "atomic-layout";
import Card from "../Card";

const cardProps = {
  title: "the best movie",
  releaseDate: "2014-10-11",
  imageUrl: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  genre: "fantasy",
};
const mockData = new Array(6).fill(cardProps);

export const CardsList = () => {
  return (
    <Composition
      templateCols={"repeat(auto-fill, minmax(20rem, 1fr))"}
      gap={"3.5rem"}
      paddingBottom={"3rem"}
    >
      {mockData.map((card, key) => (
        <Card key={key} {...card} />
      ))}
    </Composition>
  );
};
