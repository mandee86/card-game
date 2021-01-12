import React from 'react'

// styles
import { StyledRulesContainer } from './RulesContainer.styles'

// layout
import Layout from '../layout/Layout'

// components
import Rules from '../components/Rules/Rules'

const RulesContainer = ({ onNavigate }) => {

  return (
    <Layout
      classesMain="start-container"
    >
      <StyledRulesContainer>
        <Rules onNavigate={onNavigate} />
      </StyledRulesContainer>
    </Layout>
  )
}

export default RulesContainer