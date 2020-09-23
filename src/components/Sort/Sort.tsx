import React from "react";
import {
  StyledLabel,
  StyledOption,
  StyledSelect,
  StyledSelectWrapper,
} from "./styled.sort";
import { Box } from "atomic-layout";

interface ISortProps {
  sortValues: Array<string>;
}

const Sort = ({ sortValues }: ISortProps) => {
  return (
    <Box
      as={StyledSelectWrapper}
      flex
      justifyContentMd={"flex-end"}
      alignItems={"center"}
    >
      <StyledLabel htmlFor="sort-by">SORT BY</StyledLabel>
      <StyledSelect id="sort-by" defaultValue={sortValues[0].toUpperCase()}>
        {sortValues.map((value) => (
          <StyledOption key={`sort-${value}`}>
            {value.toUpperCase()}
          </StyledOption>
        ))}
      </StyledSelect>
    </Box>
  );
};

export default Sort;
