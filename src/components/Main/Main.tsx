import React from "react";
import styled from "styled-components";
import { Composition, Box } from "atomic-layout";
import Filter from "../Filter";
import Sort from "../Sort";
import CardsList from "../CardsList";

const mockedData = {
  filters: [
    { filter: "All", checked: true },
    { filter: "Documentary", checked: false },
    { filter: "Comedy", checked: false },
    { filter: "Horror", checked: false },
  ],
  sort: ["Release date", "Rating", "Budget"],
};

const StyledMain = styled.div`
  height: 100%;
  background: ${(props) => props.theme.colour.black};
`;

const Results = styled.div`
  margin: 1.875rem 0;
  font-size: 1.125rem;

  & span {
    font-weight: 600;
  }
`;

const controlsAreasMd = `filter filter filter sort`;

const controlsAreasMobile = `
  filter
  sort
`;

export const Main = () => (
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
    <Results>
      <span>39</span> movies found
    </Results>
    <CardsList />
  </Box>
);
