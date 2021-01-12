import styled from 'styled-components'
import { Colors } from '../styles/theme/Theme.styles'

export const StyledStartContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-weight: normal;
    text-align: center;
  }
  label {
    margin-bottom: 5px;
  }
  select {
    height: 50px;
    width: 120px;
    text-align: center;
    padding: 5px 20px;
    background: ${Colors['white']};
  }
  .btn {
    margin-top: 10px;
  }
`;