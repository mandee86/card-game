import { css } from 'styled-components';
import { Colors } from './theme/Theme.styles'

export const Base = css`
  html, body, #root {
    height: 100%;
    font-size: 16px;
  }

  body {
    background-color: ${Colors['gray']};
    margin: 0;
    padding: 0;
    font-family: 'Catamaran', sans-serif;
    font-size: 1rem;
    line-height: 1.4;
    color: black;
  }

  * {
    box-sizing: border-box;
  }

  .App {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    > div {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  }
`;