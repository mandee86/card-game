import styled from 'styled-components'

export const StyledCard = styled.div`
  padding: 7px;
  width: 20%;
  @media (max-width: 767px) {
    width: 33%;
  }
  .card {
    background-color: white;
    border-radius: 5px;
    background-image: ${props => props.className === 'flipped' || props.className === 'winner'  ? `url(${props.image})` : ''};
    box-shadow: 1px 1px 3px 0px rgba(50, 50, 50, 0.75);
  }
  .card:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;