import React from "react";
import styled from "styled-components";
import { Composition } from "atomic-layout";

const RadioButton = styled.div<{checked?: boolean}>`
  text-align: center;
  padding: 0.7rem;
  border-bottom: ${(props) =>
    props.checked ? `2px solid ${props.theme.colour.red}` : ""};

  input[type="radio"] {
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
    position: absolute;
    width: 0.0625rem;
    height: 0.0625rem;

    &:focus {
      + label {
        outline: 0.125rem solid ${(props) => props.theme.colour.white};
        outline-offset: 0.25rem;
      }
    }
  }

  label {
    cursor: pointer;
  }
`;
export const Filter = () => {
  return (
    <Composition
      templateCols={"repeat(auto-fill, minmax(80px, 1fr))"}
      gap={"1rem"}
    >
      <RadioButton checked>
        <input defaultChecked type="radio" name="filter" id="filter_all" />
        <label htmlFor="filter_all">ALL</label>
      </RadioButton>
      <RadioButton>
        <input type="radio" name="filter" id="filter_action" />
        <label htmlFor="filter_action">ACTION</label>
      </RadioButton>
      <RadioButton>
        <input type="radio" name="filter" id="filter_comedy" />
        <label htmlFor="filter_comedy">COMEDY</label>
      </RadioButton>
    </Composition>
  );
};
