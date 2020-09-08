import React from "react";
import { Menu, MenuList, MenuButton } from "@reach/menu-button";
import styled from "styled-components";
import EditMovie from "../EditMovie";
import DeleteMovie from "../DeleteMovie";
import DotsIcon from "../DotsIcon";
import "@reach/menu-button/styles.css";

const StyledMenuButton = styled(MenuButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: none;
  background: ${(props) => props.theme.colour.black};
`;

const StyledMenuList = styled(MenuList)`
  background: ${(props) => props.theme.colour.black};
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
`;

const StyledMenuWrapper = styled.div`
  & [data-reach-menu] {
    position: static;
  }
`;

export const CardOptions = () => {
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
