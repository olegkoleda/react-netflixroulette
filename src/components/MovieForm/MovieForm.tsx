import React, { useCallback, useMemo, useState } from "react";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import { StyledLabel, StyledText } from "../Input/styled.input";
import { useInput } from "../../hooks/useInput";
import { Box } from "atomic-layout";
import { IMovie } from "../../interfaces/IMovie";

interface IFormProps {
  movieData?: IMovie;
  callback: Function;
}
const options = [
  { label: "Drama", value: "Drama" },
  { label: "Romance", value: "Romance" },
  { label: "Animation", value: "Animation" },
  { label: "Adventure", value: "Adventure" },
  { label: "Family", value: "Family" },
  { label: "Comedy", value: "Comedy" },
  { label: "Fantasy", value: "Fantasy" },
  { label: "Science Fiction", value: "Science Fiction" },
  { label: "Action", value: "Action" },
  { label: "Mystery", value: "Mystery" },
  { label: "Thriller", value: "Thriller" },
  { label: "Music", value: "Music" },
  { label: "War", value: "War" },
  { label: "Crime", value: "Crime" },
  { label: "History", value: "History" },
  { label: "Horror", value: "Horror" },
  { label: "Western", value: "Western" },
  { label: "Documentary", value: "Documentary" },
  { label: "TV Movie", value: "TV Movie" },
];

const MovieForm: React.FC<IFormProps> = ({ movieData, callback }) => {
  const selectedGenres =
    useMemo(() => movieData?.genres.map((value) => ({ label: value, value })), [
      movieData,
    ]) || [];

  const [selected, setSelected] = useState(selectedGenres);
  const { value: title, bind: bindTitle, reset: resetTitle } = useInput(
    movieData?.title || ""
  );
  const { value: date, bind: bindDate, reset: resetDate } = useInput(
    movieData?.release_date || ""
  );
  const { value: url, bind: bindUrl, reset: resetUrl } = useInput(
    movieData?.poster_path || ""
  );
  const { value: runtime, bind: bindRuntime, reset: resetRuntime } = useInput(
    "" + movieData?.runtime || ""
  );
  const {
    value: overview,
    bind: bindOverview,
    reset: resetOverview,
  } = useInput(movieData?.overview || "");

  const genres = useMemo(() => selected.map(({ value }) => value), [selected]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const formData = {
        ...movieData,
        title,
        release_date: date,
        poster_path: url,
        overview,
        runtime: +runtime,
        genres,
      };

      callback(formData);
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
      {movieData?.id ? (
        <StyledLabel>
          {"Movie ID"}
          <StyledText>{movieData?.id}</StyledText>
        </StyledLabel>
      ) : (
        false
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
      <Box flex justifyContent={"space-between"} marginTop={"2rem"}>
        <Button secondary onClick={handleReset}>
          Reset
        </Button>
        <Button>Submit</Button>
      </Box>
    </form>
  );
};

export default MovieForm;
