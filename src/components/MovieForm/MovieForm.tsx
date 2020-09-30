import React, { useCallback, useMemo, useState } from "react";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import { StyledLabel, StyledText } from "../Input/styled.input";
import { useInput } from "../../hooks/useInput";
import { Box } from "atomic-layout";

interface IFormProps {
  movieId?: number;
  callback: Function;
}
const options = [
  { label: "Drama", value: "drama" },
  { label: "Fantasy", value: "fantasy" },
  { label: "Since Fiction", value: "since fiction" },
];

const MovieForm: React.FC<IFormProps> = ({ movieId = false, callback }) => {
  const [selected, setSelected] = useState([]);
  const { value: title, bind: bindTitle, reset: resetTitle } = useInput("");
  const { value: date, bind: bindDate, reset: resetDate } = useInput("");
  const { value: url, bind: bindUrl, reset: resetUrl } = useInput("");
  const { value: runtime, bind: bindRuntime, reset: resetRuntime } = useInput(
    ""
  );
  const {
    value: overview,
    bind: bindOverview,
    reset: resetOverview,
  } = useInput("");

  const genres = useMemo(() => selected.map(({ value }) => value), [selected]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const formData = {
        title,
        release_date: date,
        poster_path: url,
        overview,
        runtime: +runtime,
        genres,
      };

      callback(formData);
      console.log(formData);
    },
    [title, date, url, overview, runtime, genres]
  );

  const handleReset = useCallback(
    (e) => {
      e.preventDefault();
      resetTitle();
      resetDate();
      resetUrl();
      resetRuntime();
      resetOverview();
      setSelected([]);
    },
    [resetTitle, resetDate, resetUrl, resetRuntime, resetOverview, setSelected]
  );

  return (
    <form onSubmit={handleSubmit}>
      {movieId ?? (
        <StyledLabel>
          {"Movie ID"}
          <StyledText>{movieId}</StyledText>
        </StyledLabel>
      )}
      <Input label="Title" placeholder="Select Title" {...bindTitle} />
      <Input
        type="date"
        label="Release date"
        placeholder="Select Date"
        {...bindDate}
      />
      <Input label="movie URL" placeholder="Movie URL here" {...bindUrl} />
      <Select
        options={options}
        selected={selected}
        setSelected={setSelected}
        label={"Genre"}
        placeholder={"Select Genre"}
        search={true}
      />
      <Input label="Overview" placeholder="Overview here" {...bindOverview} />
      <Input
        label="Runtime"
        placeholder="Runtime here"
        type={"number"}
        {...bindRuntime}
      />
      <Box>
        <Button secondary onClick={handleReset}>
          Reset
        </Button>
        <Button>Submit</Button>
      </Box>
    </form>
  );
};

export default MovieForm;
