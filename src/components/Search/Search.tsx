import React from "react";
import { StyledInput } from "./styled.search";
import { Composition } from "atomic-layout";
import Button from "../Button";

const Search = () => (
  <Composition
    gap={"1rem"}
    templateRows={"3.5rem 3.5rem"}
    templateCols={"none"}
    templateRowsMd={"none"}
    templateColsMd={"4fr 1fr"}
  >
    <StyledInput type="text" name="search" id="search" />
    <Button>SEARCH</Button>
  </Composition>
);

export default Search;
