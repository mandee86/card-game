import React, { useState } from 'react'

// styles
import { StyledStartSettings } from './StartSettings.styles'

// data
import deckOptions from '../../data/options'

const StartSettings = ({ deckSize, onClick }) => {

  const [selectedOption, setSelectedOption] = useState(deckSize);

  return (
    <StyledStartSettings className="settings-wrapper">
      <div className="settings">
        <label>Deck size</label>
        <select value={selectedOption} onChange={(event) => {
          setSelectedOption(event.target.value)
        }}>
          {deckOptions().map((option, index) => {
            return (
              <option key={index} value={option}>{option}</option>
            )
          })}
        </select>
        <button
          className="btn"
          onClick={() => onClick(selectedOption)}
        >
          start a new game
        </button>
      </div>
    </StyledStartSettings>
  )
}

export default StartSettings;