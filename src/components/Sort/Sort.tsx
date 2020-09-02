import React from "react";
import styled from "styled-components";
import { Box } from "atomic-layout";

const SelectWrapper = styled.div`
  padding: 0.7rem;
  text-align: right;
`;

const Label = styled.label`
  margin-right: 1rem;
  color: ${props => props.theme.colour.grey};
`;

const Option = styled.option`
  background: ${(props) => props.theme.colour.black};
  &:checked {
    background: ${(props) => props.theme.colour.red};
    color: ${(props) => props.theme.colour.white};
  }
`;

const Select = styled.select`
  background: none;
  border: none;
  color: ${(props) => props.theme.colour.white};
  font-size: 1rem;
`;

export const Sort = () => {
  return (
    <Box
      as={SelectWrapper}
      flex
      justifyContentMd={"flex-end"}
      alignItems={"center"}
    >
      <Label htmlFor="sort-by">SORT BY</Label>
      <Select id="sort-by" defaultValue="RELEASE DATE">
        <Option>RELEASE DATE</Option>
        <Option>RATING</Option>
        <Option>BUDGET</Option>
      </Select>
    </Box>
  );
};
