import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Box } from "atomic-layout";

interface FilterType {
  filter: string;
  checked: boolean;
}

interface FilterProps {
  filters: Array<FilterType>;
}

const RadioButton = styled.div<{ checked?: boolean }>`
  text-align: center;
  padding: 0.7rem;
  margin-right: 1.5rem;
  border-bottom: ${(props) =>
    props.checked ? `2px solid ${props.theme.colour.red}` : ""};

  input[type="radio"] {
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
    position: absolute;
    width: 0.0625rem;
    height: 0.0625rem;

    &:focus {
      + label {
        outline: 0.125rem solid ${(props) => props.theme.colour.white};
        outline-offset: 0.25rem;
      }
    }
  }

  label {
    cursor: pointer;
  }
`;


export const Filter = ({ filters }: FilterProps) => {
  const changeValue = (e: ChangeEvent) => {
    console.log(e.target);
  };
  return (
    <Box flex onChange={changeValue}>
      {filters.map(({ filter, checked }: FilterType) => (
        <RadioButton checked={checked} key={`filter_${filter}`}>
          <input
            defaultChecked={checked}
            type="radio"
            name="filter"
            id={`filter_${filter}`}
          />
          <label htmlFor={`filter_${filter}`}>{filter.toUpperCase()}</label>
        </RadioButton>
      ))}
    </Box>
  );
};
