import React, { ChangeEvent } from "react";
import { StyledRadioButton } from "./styled.radioButton";
import { Box } from "atomic-layout";

interface FilterType {
  filter: string;
  checked: boolean;
}

interface FilterProps {
  filters: Array<FilterType>;
}

const Filter = ({ filters }: FilterProps) => {
  const changeValue = (e: ChangeEvent) => {
    console.log(e.target);
  };
  return (
    <Box flex onChange={changeValue}>
      {filters.map(({ filter, checked }: FilterType) => {
        const filterId = `filter_${filter}`;
        return (
          <StyledRadioButton checked={checked} key={filterId}>
            <input
              defaultChecked={checked}
              type="radio"
              name="filter"
              id={filterId}
            />
            <label htmlFor={filterId}>{filter.toUpperCase()}</label>
          </StyledRadioButton>
        );
      })}
    </Box>
  );
};

export default Filter;
