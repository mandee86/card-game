import React from 'react'

// styles
import { StyledStartContainer } from './StartContainer.styles'

// layout
import Layout from '../layout/Layout'

// components
import StartSettings from '../components/StartSettings/StartSettings'

const StartContainer = ({ deckSize, restart }) => {

  return (
    <Layout
      classesMain="start-container"
    >
      <StyledStartContainer>
        <h1>Splendex Memory Game</h1>

        <StartSettings
          deckSize={deckSize}
          onClick={(selectedOption) => restart(selectedOption)}
        />

      </StyledStartContainer>
    </Layout>
  )
}

export default StartContainer