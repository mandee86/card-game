import React from 'react'

// styles
import { StyledRules } from './Rules.styles'

const Rules = ({ onNavigate }) => {
  return (
    <StyledRules
    >
      <h1>Rules</h1>
      <p>
        bla bla
      </p>
      <button
        className="btn"
        onClick={onNavigate}
      >
        Start the game
      </button>
    </StyledRules>
  )
}

export default Rules;