import React, { useState } from "react";
import styled from "styled-components";
import CustomModal from "../Modal";

export const EditMovie = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const OptionsButton = styled.button`
    width: 100%;
    background: transparent;
    border: none;
    padding: 0.5rem;
    color: ${(props) => props.theme.colour.white};

    &:hover {
      background: ${(props) => props.theme.colour.red};
    }
  `;

  return (
    <>
      <OptionsButton onClick={toggleModal}>EditMovie</OptionsButton>
      <CustomModal isOpen={isOpen} toggleModal={toggleModal}>
        Edit Movie Fields
      </CustomModal>
    </>
  );
};
