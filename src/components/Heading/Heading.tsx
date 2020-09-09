import styled from "styled-components";

const Heading = styled.h3`
  font-size: 3rem;
  letter-spacing: 0.3125rem;
  font-variant: all-petite-caps;
  color: ${(props) => props.theme.colour.white};
`;

export default Heading;
