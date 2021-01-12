import React from 'react'

// styles
import { StyledCard } from './Card.styles'

const Card = ({ card, onClick, classes }) => {
  return (
    <StyledCard
      className={classes}
      onClick={onClick}
      image={`/img/cards/${card.name}.png`}
    >
      <div className="card bg-cover">
  
      </div>
    </StyledCard>
  )
}

export default Card