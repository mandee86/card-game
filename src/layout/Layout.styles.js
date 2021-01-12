import styled from 'styled-components'

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  .main {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    padding: 0 15px;
    max-width: 895px;
    margin: 0 auto;
  }
  .start-container {
    align-items: center;
  }
`;