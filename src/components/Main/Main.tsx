import React from "react";
import styled from "styled-components";
import { Composition, Box } from "atomic-layout";
import Filter from "../Filter";
import Sort from '../Sort';
import CardsList from '../CardsList'

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
            <Filter />
          </Areas.Filter>
          <Areas.Sort>
            <Sort />
          </Areas.Sort>
        </>
      )}
    </Composition>
    <Results><span>39</span> movies found</Results>
    <CardsList />
  </Box>
);
