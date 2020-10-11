import React from "react";
import { Composition } from "atomic-layout";
import Card from "../Card";
import { IMovie } from "../../interfaces/IMovie";

interface ICardListProps {
  data: IMovie[];
}
const CardsList: React.FC<ICardListProps> = ({ data }) => {
  return (
    <Composition
      templateCols={"repeat(auto-fill, minmax(20rem, 1fr))"}
      gap={"3.5rem"}
      paddingBottom={"3rem"}
    >
      {data.map(({ id, genres, poster_path, release_date, title }) => (
        <Card
          key={id}
          genre={genres}
          imageUrl={poster_path}
          releaseDate={release_date}
          title={title}
          id={id}
        />
      ))}
    </Composition>
  );
};

export default CardsList;
