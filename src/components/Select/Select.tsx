import React, { useMemo } from "react";
import MultiSelect from "react-multi-select-component";
import { StyledSelect } from "./styled.select";
import {
  StyledError,
  StyledLabel,
  StyledInputWrapper,
} from "../Input/styled.input";
import { Option } from "react-multi-select-component/dist/lib/interfaces";
import { useField } from "formik";

export interface IError {
  hasError?: boolean;
}

interface ICustomSelectProps extends IError {
  options: Option[];
  label: string;
  placeholder: string;
  search: boolean;
  name: string;
}

const Select: React.FC<ICustomSelectProps> = (props) => {
  const { label, options, placeholder, search } = props;

  const [field, meta, helpers] = useField(props);
  return (
    <StyledInputWrapper>
      <StyledLabel>
        <StyledSelect
          hasError={!!meta.error}
          onClick={() => {
            helpers.setTouched(true);
          }}
        >
          {label}
          <MultiSelect
            options={options}
            {...field}
            onChange={(value: Option) => {
              helpers.setValue(value);
            }}
            labelledBy={placeholder}
            disableSearch={!search}
          />
        </StyledSelect>
      </StyledLabel>
      {!!meta.error && <StyledError>{meta.error}</StyledError>}
    </StyledInputWrapper>
  );
};

export default Select;
