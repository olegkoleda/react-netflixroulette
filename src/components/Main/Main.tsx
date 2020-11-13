import React from "react";
import { StyledMain, StyledResults } from "./styled.main";
import { Composition, Box } from "atomic-layout";
import Filter from "../Filter";
import Sort from "../Sort";
import CardsList from "../CardsList";
import { IMovie } from "../../interfaces/IMovie";
import Heading from "../Heading";

interface IMainProps {
  movies?: IMovie[];
}

export const mockedData = {
  filters: [
    { value: "", label: "All" },
    { value: "Documentary", label: "Documentary" },
    { value: "Comedy", label: "Comedy" },
    { value: "Horror", label: "Horror" },
  ],
  sort: [
    { value: "release_date", label: "Release date" },
    { value: "rating", label: "Rating" },
    { value: "budget", label: "Budget" },
  ],
};

const controlsAreasMd = `filter filter filter sort`;

const controlsAreasMobile = `
  filter
  sort
`;

const Main: React.FC<IMainProps> = ({ movies = [] }) => (
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

    {(movies.length && (
      <>
        <StyledResults>
          <span>{movies.length}</span> movies found
        </StyledResults>
        <CardsList data={movies} />
      </>
    )) || (
      <Box flex justifyContent={"center"} marginTop={"2rem"}>
        <Heading>No movie found</Heading>
      </Box>
    )}
  </Box>
);

export default Main;
