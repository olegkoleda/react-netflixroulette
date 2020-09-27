import React, { ChangeEvent } from "react";
import { StyledRadioButton } from "./styled.radioButton";
import { Box } from "atomic-layout";

interface IFilterType {
  filter: string;
  checked: boolean;
}

interface IFilterProps {
  filters: Array<IFilterType>;
}

const Filter = ({ filters }: IFilterProps) => {
  const changeValue = (e: ChangeEvent) => {
    console.log(e.target);
  };
  return (
    <Box flex onChange={changeValue}>
      {filters.map(({ filter, checked }: IFilterType) => {
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
