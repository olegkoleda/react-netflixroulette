import React from "react";
import { Menu } from "@reach/menu-button";
import {
  StyledMenuButton,
  StyledMenuList,
  StyledMenuWrapper,
} from "./styled.cardOptions";
import EditMovie from "../EditMovie";
import DeleteMovie from "../DeleteMovie";
import DotsIcon from "../DotsIcon";
import "@reach/menu-button/styles.css";

const CardOptions = () => {
  return (
    <StyledMenuWrapper>
      <Menu>
        <StyledMenuButton className="card-icon">
          <DotsIcon />
        </StyledMenuButton>
        <StyledMenuList portal={false}>
          <EditMovie />
          <DeleteMovie />
        </StyledMenuList>
      </Menu>
    </StyledMenuWrapper>
  );
};

export default CardOptions;
