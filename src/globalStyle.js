import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *:root {
    --primary: #b0dfc8;
    --secondary: #055726;
    --accent: #8a4f26;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background-image: linear-gradient(176.73deg, #b0dfc8 60.43%, #41af79 101.81%);
    background-repeat: no-repeat;
    height: 100vh;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;
