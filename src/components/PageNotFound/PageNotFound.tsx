import { Box } from "atomic-layout";
import React from "react";
import Link from 'next/link'
import Heading from "../Heading";
import Logo from "../Logo";
import { StyledLogo, StyledError } from "./styled.pageNotFound";
import { StyledMain } from "../Main/styled.main";
import Button from "../Button";
import Footer from "../Footer";

const PageNotFound = () => {
  return (
    <>
      <Box
        as={StyledMain}
        flex
        justifyContent="center"
        alignItems="center"
        height={"calc(100vh - 4.5rem)"}
        flexDirection="column"
      >
        <StyledLogo>
          <Logo />
        </StyledLogo>
        <Heading>PAGE NOT FOUND</Heading>
        <StyledError>404</StyledError>
        <Link href={"/"}>
          <a>
            <Button secondary>Back to home page</Button>
          </a>
        </Link>
      </Box>
      <Footer />
    </>
  );
};

export default PageNotFound;
