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

// const Select: React.FC = () => {
//   const options = [
//     { label: "Grapes 🍇", value: "grapes" },
//     { label: "Mango 🥭", value: "mango" },
//     { label: "Strawberry 🍓", value: "strawberry", disabled: true },
//     { label: "Watermelon 🍉", value: "watermelon" },
//     { label: "Pear 🍐", value: "pear" },
//     { label: "Apple 🍎", value: "apple" },
//     { label: "Tangerine 🍊", value: "tangerine" },
//     { label: "Pineapple 🍍", value: "pineapple" },
//     { label: "Peach 🍑", value: "peach" },
//   ];

//   const [selected, setSelected] = useState([]);

//   return (
//     <div>
//       <h1>Select Fruits</h1>
//       <pre>{JSON.stringify(selected)}</pre>
//       <MultiSelect
//         options={options}
//         value={selected}
//         onChange={setSelected}
//         labelledBy={"Select"}
//       />
//     </div>
//   );
// };

export default Select;
