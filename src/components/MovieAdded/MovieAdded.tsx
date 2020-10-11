import React from "react";
import { Box } from "atomic-layout";
import Heading from "../Heading";

const MovieAdded: React.FC = () => (
  <Box
    flex
    alignItems={"center"}
    justifyContent={"center"}
    flexDirection={"column"}
  >
    <Heading>Congratulations!</Heading>
    <p>The movie has been added to database successfully!</p>
  </Box>
);

export default MovieAdded;
