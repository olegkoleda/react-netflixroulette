import React from "react";
import styled from "styled-components";
import { Box } from "atomic-layout";

interface SortProps {
  sortValues: Array<string>;
}

const SelectWrapper = styled.div`
  padding: 0.7rem;
  text-align: right;
`;

const Label = styled.label`
  margin-right: 1rem;
  color: ${(props) => props.theme.colour.grey};
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

export const Sort = ({ sortValues }: SortProps) => {
  return (
    <Box
      as={SelectWrapper}
      flex
      justifyContentMd={"flex-end"}
      alignItems={"center"}
    >
      <Label htmlFor="sort-by">SORT BY</Label>
      <Select id="sort-by" defaultValue={sortValues[0].toUpperCase()}>
        {sortValues.map((value) => (
          <Option key={`sort-${value}`}>{value.toUpperCase()}</Option>
        ))}
      </Select>
    </Box>
  );
};
