import styled from 'styled-components'
import { Colors } from '../../styles/theme/Theme.styles'

export const StyledHeader = styled.div`
  background-color: ${Colors['black']};
  padding: 5px 20px;
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
  .logo {
    display: block;
    width: 160px;
    img {
      display: block;
      width: 100%;
    }
  }
  .settings-wrapper {
    flex: 1;
    @media (max-width: 767px) {
      margin-top: 15px;
    }
    .settings {
      flex-direction: row;
      justify-content: center;
      label {
        color: ${Colors['gray']}
      }
      select {
        margin: 0 10px;
      }
    }
  }
`;