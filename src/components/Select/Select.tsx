import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import { StyledSelect } from "./styled.select";
import {
  StyledError,
  StyledLabel,
  StyledInputWrapper,
} from "../Input/styled.input";
import { Option } from "react-multi-select-component/dist/lib/interfaces";

export interface IError {
  hasError?: boolean;
}

interface ICustomSelectProps extends IError {
  options: Option[];
  selected: Option[];
  setSelected?: Function;
  label: string;
  placeholder: string;
  search: boolean;
}

const Select: React.FC<ICustomSelectProps> = ({
  label,
  options,
  selected,
  setSelected,
  placeholder,
  search,
}) => {
  return (
    <StyledInputWrapper>
      <StyledLabel>
        <StyledSelect>
          {label}
          <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy={placeholder}
            disableSearch={!search}
          />
        </StyledSelect>
      </StyledLabel>
      <StyledError />
    </StyledInputWrapper>
  );
};

export default Select;
