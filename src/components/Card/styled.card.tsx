import styled from "styled-components";

export const StyledCard = styled.div`
  height: 33rem;
  color: ${(props) => props.theme.color.grey};
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const StyledImageWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  position: relative;

  &:hover {
    .card-icon {
      display: block;
    }
  }
`;

export const StyledTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const StyledYear = styled.span`
  padding: 0.3rem 1rem;
  border-radius: 0.3125rem;
  border: 0.0125rem solid ${(props) => props.theme.color.grey};
`;

export const StyledGenre = styled.span`
  font-size: 0.875rem;
`;
