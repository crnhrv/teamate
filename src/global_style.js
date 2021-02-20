import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *:root {
    --primary: #b0dfc8;
    --secondary: #055726;
    --accent: #8a4f26;
    --hover: #f3f3f3
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    background-image: linear-gradient(196.73deg, #b0dfc8 60.43%, #41af79 101.81%);
    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: 'Roboto', sans-serif;
  }

`;
