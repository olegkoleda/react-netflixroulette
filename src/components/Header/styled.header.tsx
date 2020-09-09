import styled from "styled-components";

export const StyledHeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(4px);
  z-index: -1;
`;

export const StyledBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: rgba(0, 0, 0, 0.5);
`;
