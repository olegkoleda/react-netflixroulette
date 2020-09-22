import React from "react";
import { StyledMain, StyledResults } from "./styled.main";
import { Composition, Box } from "atomic-layout";
import Filter from "../Filter";
import Sort from "../Sort";
import CardsList from "../CardsList";
import { IMovie } from "../../interfaces/IMovie";

interface IMainProps {
  movies: IMovie[];
  changeMovie: Function;
}

const mockedData = {
  filters: [
    { filter: "All", checked: true },
    { filter: "Documentary", checked: false },
    { filter: "Comedy", checked: false },
    { filter: "Horror", checked: false },
  ],
  sort: ["Release date", "Rating", "Budget"],
};

const controlsAreasMd = `filter filter filter sort`;

const controlsAreasMobile = `
  filter
  sort
`;

const Main: React.FC<IMainProps> = ({ movies, changeMovie }) => (
  <Box as={StyledMain} paddingHorizontal={"1rem"} paddingHorizontalMd={"3rem"}>
    <Composition areas={controlsAreasMobile} areasMd={controlsAreasMd}>
      {(Areas) => (
        <>
          <Areas.Filter>
            <Filter filters={mockedData.filters} />
          </Areas.Filter>
          <Areas.Sort>
            <Sort sortValues={mockedData.sort} />
          </Areas.Sort>
        </>
      )}
    </Composition>
    <StyledResults>
      <span>{movies.length}</span> movies found
    </StyledResults>
    <CardsList data={movies} changeMovie={changeMovie} />
  </Box>
);

export default Main;
