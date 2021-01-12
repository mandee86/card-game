import { css } from 'styled-components'
import { Colors } from '../theme/Theme.styles'

export const Select = css`
  select {
    height: 50px;
    width: 120px;
    padding: 5px 20px;
    background: ${Colors['white']};
    border-radius: 5px;
    text-align: center;
    font-size: 20px;
  }
`;