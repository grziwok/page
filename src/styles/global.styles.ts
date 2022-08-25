import { createGlobalStyle } from 'styled-components';
import { colors, devices } from './variables.styles';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

  html,
  body {
    color: ${colors.white};
    background: ${colors.black};
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 1.4;

    @media ${devices.tablet} {
      font-size: 16px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
