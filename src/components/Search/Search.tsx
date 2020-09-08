import React from "react";
import styled from "styled-components";
import { Composition } from "atomic-layout";
import Button from "../Button";

const Input = styled.input.attrs((props) => ({
  placeholder: "What do you want to watch?",
}))`
  font-size: 1.5rem;
  padding-left: 1rem;
`;

export const Search = () => {
  return (
    <Composition
      gap={"1rem"}
      templateRows={"3.5rem 3.5rem"}
      templateCols={"none"}
      templateRowsMd={"none"}
      templateColsMd={"4fr 1fr"}
    >
      <Input type="text" name="search" id="search" />
      <Button>SEARCH</Button>
    </Composition>
  );
};
