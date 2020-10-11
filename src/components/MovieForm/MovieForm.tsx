import React, { useCallback, useMemo, useState } from "react";
import { Formik, FormikProps, Form, validateYupSchema } from "formik";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import { StyledLabel, StyledText } from "../Input/styled.input";
import { Box } from "atomic-layout";
import { IMovie } from "../../interfaces/IMovie";
import * as Yup from "yup";

interface IFormProps {
  movieData?: IMovie;
  submitCallback: Function;
}

interface IFormValues {
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  runtime: number;
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

const MovieSchema = Yup.object().shape({
  title: Yup.string().required("Required!"),
  release_date: Yup.date().required("Required!"),
  poster_path: Yup.string().url("Not URL").required("Required!"),
  overview: Yup.string().required("Required!"),
  runtime: Yup.number()
    .positive("Must be a positive number")
    .required("Required!"),
});

const MovieForm: React.FC<IFormProps> = ({ movieData, submitCallback }) => {
  const selectedGenres =
    useMemo(() => movieData?.genres.map((value) => ({ label: value, value })), [
      movieData,
    ]) || [];

  const [selected, setSelected] = useState(selectedGenres);

  const genres = useMemo(() => selected.map(({ value }) => value), [selected]);

  return (
    <Formik
      initialValues={{
        title: movieData?.title || "",
        release_date: movieData?.release_date || "",
        poster_path: movieData?.poster_path || "",
        overview: movieData?.overview || "",
        runtime: movieData?.runtime || "",
      }}
      validationSchema={MovieSchema}
      onSubmit={(values) => {
        const formData = {
          ...movieData,
          genres,
          ...values,
        };
        console.log(formData);

        submitCallback(formData);
      }}
    >
      {(props: FormikProps<IFormValues>) => (
        <Form>
          {movieData?.id && (
            <StyledLabel>
              {"Movie ID"}
              <StyledText>{movieData?.id}</StyledText>
            </StyledLabel>
          )}
          <Input name="title" label="Title" placeholder="Select Title"/>
          <Input
            name="release_date"
            type="date"
            label="Release date"
            placeholder="Select Date"
          />
          <Input
            name="poster_path"
            label="movie URL"
            placeholder="Movie URL here"
          />
          <Select
            options={options}
            selected={selected}
            setSelected={setSelected}
            label={"Genre"}
            placeholder={"Select Genre"}
            search={true}
          />
          <Input name="overview" label="Overview" placeholder="Overview here" />
          <Input
            name="runtime"
            label="Runtime"
            placeholder="Runtime here"
            type={"number"}
          />
          <Box flex justifyContent={"space-between"} marginTop={"2rem"}>
            <Button secondary onClick={props.resetForm}>
              Reset
            </Button>
            <Button>Submit</Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default MovieForm;
