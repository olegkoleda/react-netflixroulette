import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import OpenSansReg from "../fonts/Open_Sans/OpenSans-Regular.ttf";
import OpenSansBold from "../fonts/Open_Sans/OpenSans-Bold.ttf";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
        font-family: 'Open_Sans';
        src: url(${OpenSansReg}) format('ttf');
        font-weight: 400;
        font-style: normal;
    }

  @font-face {
        font-family: 'Open_Sans';
        src: url(${OpenSansBold}) format('ttf');
        font-weight: 700;
        font-style: normal;
    }
    
    html, body {
        scroll-behavior: smooth;
        font-family: Open_Sans, Arial, Helvetica, sans-serif;
        font-size: 16px;
        color: #fff;
    }
`;
