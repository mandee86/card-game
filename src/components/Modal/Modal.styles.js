import styled from 'styled-components'
import { Colors } from '../../styles/theme/Theme.styles'

export const StyledModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .modal {
    position: relative;
    background-color: ${Colors['white']};
    border-radius: 5px;
    width: 100%;
    max-width: 500px;
    padding: 15px;
    text-align: center;
    .btn--close {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
`;