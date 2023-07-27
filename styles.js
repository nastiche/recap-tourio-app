import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background-color: #fefffe;
    margin: 0;
    font-family: system-ui;
  }
`;
