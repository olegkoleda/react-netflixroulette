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
import { IMovieId } from "../../interfaces/IMovie";

const CardOptions: React.FC<IMovieId> = ({ id }) => {
  return (
    <StyledMenuWrapper>
      <Menu>
        <StyledMenuButton className="card-icon">
          <DotsIcon />
        </StyledMenuButton>
        <StyledMenuList portal={false}>
          <EditMovie id={id} />
          <DeleteMovie id={id} />
        </StyledMenuList>
      </Menu>
    </StyledMenuWrapper>
  );
};

export default CardOptions;
