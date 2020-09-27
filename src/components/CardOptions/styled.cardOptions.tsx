import styled from "styled-components";
import { MenuList, MenuButton } from "@reach/menu-button";

export const StyledMenuButton = styled(MenuButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: none;
  background: ${(props) => props.theme.color.black};
`;

export const StyledMenuList = styled(MenuList)`
  background: ${(props) => props.theme.color.black};
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
`;

export const StyledMenuWrapper = styled.div`
  & [data-reach-menu] {
    position: static;
  }
`;
