import { css } from 'styled-components';
import { Colors } from '../theme/Theme.styles'

export const Links = css`
  a {
    text-decoration: none;
    &:hover {
      color: ${Colors['orange']}
    }
  }
`;

