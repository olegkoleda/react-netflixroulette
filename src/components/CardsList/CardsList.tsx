import React from "react";
import { Composition } from "atomic-layout";
import Card from "../Card";

const cardProps = {
  title: "Star Wars: The Last Jedi",
  releaseDate: "2014-10-11",
  imageUrl: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  genre: "Fantasy Adventure Science Fiction",
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
