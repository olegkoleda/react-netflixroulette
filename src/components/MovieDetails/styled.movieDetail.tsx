import styled from "styled-components";

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  max-height: 25rem;
`;

export const StyledRating = styled.span`
  width: 4rem;
  height: 4rem;
  border: thin solid #fff;
  color: green;
  font-size: 1.25rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`;

export const StyledTagLine = styled.span`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

export const StyledAccent = styled.span`
  font-size: 1.5rem;
  color: ${(props) => props.theme.color.red};
  margin-right: 2rem;
`;
