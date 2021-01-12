import { css } from 'styled-components'
import { Colors } from '../theme/Theme.styles'

export const Buttons = css`
  .btn {
    padding: 10px 15px;
    background-color: ${Colors['red']};
    height: 50px;
    border-radius: 5px;
    border: none;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    color: ${Colors['white']};
    
    &:hover {
      cursor: pointer;
    }
  }
  .btn--transparent {
    background-color: transparent;
    border: 1px solid ${Colors['black']};
    color: ${Colors['black']};
  }
`;