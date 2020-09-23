import React, { useState } from "react";
import Input from "../Input";
import Select from "../Select";
import { StyledLabel, StyledText } from "../Input/styled.input";

interface IFormProps {
  movieId?: number;
}
const options = [
  { label: "Drama", value: "drama" },
  { label: "Fantasy", value: "fantasy" },
  { label: "Since Fiction", value: "since fiction" },
];

const MovieForm: React.FC<IFormProps> = ({ movieId }) => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      {movieId ?? (
        <StyledLabel>
          {"Movie ID"}
          <StyledText>{movieId}</StyledText>
        </StyledLabel>
      )}
      <Input label="Title" placeholder="Select Title" />
      <Input type="date" label="Release date" placeholder="Select Date" />
      <Input label="movie URL" placeholder="Movie URL here" />
      <Input label="Genre" placeholder="Select Genre" />
      <Select
        options={options}
        selected={selected}
        setSelected={setSelected}
        label={"Genre"}
        placeholder={"Select Genre"}
        search={true}
      />
      <Input label="Overview" placeholder="Overview here" />
      <Input label="Runtime" placeholder="Runtime here" />
    </div>
  );
};

export default MovieForm;
