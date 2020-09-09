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
      {filters.map(({ filter, checked }: FilterType) => (
        <StyledRadioButton checked={checked} key={`filter_${filter}`}>
          <input
            defaultChecked={checked}
            type="radio"
            name="filter"
            id={`filter_${filter}`}
          />
          <label htmlFor={`filter_${filter}`}>{filter.toUpperCase()}</label>
        </StyledRadioButton>
      ))}
    </Box>
  );
};

export default Filter;
