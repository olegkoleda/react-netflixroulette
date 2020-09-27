import React from "react";
import { Box } from "atomic-layout";
import { StyledOptionsButton } from "./styled.optionsButton";
import CustomModal from "../Modal";
import { IMovieId } from "../../interfaces/IMovie";
import Button from "../Button";
import { useToggle } from "../../hooks/useToggle";

const DeleteMovie: React.FC<IMovieId> = ({ id }) => {
  const [isOpen, setIsOpen] = useToggle(false);

  return (
    <>
      <StyledOptionsButton onClick={setIsOpen}>
        Delete movie
      </StyledOptionsButton>
      <CustomModal
        title={"Delete movie"}
        isOpen={isOpen}
        toggleModal={setIsOpen}
      >
        <p>Are you sure you want to delete this movie?</p>
        <Box flex justifyContent={"flex-end"} marginTop={"1rem"}>
          <Button>Confirm</Button>
        </Box>
      </CustomModal>
    </>
  );
};

export default DeleteMovie;
