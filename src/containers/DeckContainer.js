import React, { useState } from 'react'

// styles
import { StyledDeckContainer } from './DeckContainer.styles'

// layout
import Layout from '../layout/Layout'

// components
import Card from '../components/Cards/Card'
import StartSettings from '../components/StartSettings/StartSettings'
import Modal from '../components/Modal/Modal'

const DeckContainer = ({
  cards,
  selectedCards,
  setSelectCard,
  winnerCards,
  deckSize,
  restart,
  showModal
}) => {

  const [currentTries, setCurrentTries] = useState(+localStorage.getItem('currentTries') || 0);

  // show the current tries text
  const getCurrentTriesNumber = () => {
    const text = currentTries % 2 === 0 ? currentTries/2 : (currentTries - 1)/2;
    return text;
  }

  // handle class of card (depend on selected/winner/basic)
  const getCardClass = (card) => {
    let classes = '';
    if(selectedCards.find(element => element.id === card.id)) {
      classes = 'flipped'
    }
    if(winnerCards.find(element => element.id === card.id)) {
      classes = 'winner'
    }
    return classes;
  }

  // handle card clik
  const handleCardClick = (card) => {
    setCurrentTries(currentTries + 1)
    localStorage.setItem('currentTries', currentTries + 1);
    setSelectCard(card)
  }

  return (
    <Layout
      headerChildren={
        <StartSettings
          deckSize={deckSize}
          onClick={(selectedOption) => {
            restart(selectedOption);
            setCurrentTries(0);
          }}
        />
      }
    >
      <StyledDeckContainer>
        <div className="deck-top">
          <div>
            <span>Current tries: 
              {getCurrentTriesNumber()}
            </span>
          </div>
          <div>
            <span>Best: 9</span>
          </div>
          <div>
            <button
              onClick={() => {
                restart(deckSize);
                setCurrentTries(0);
              }}
              className="btn btn--transparent"
            >
              restart
            </button>
          </div>
        </div>
        <div className="card-list">
          {console.log(cards)}
          {cards.map(card => {
            return (
              <Card
                key={card.id}
                card={card}
                classes={getCardClass(card)}
                onClick={() => {
                  (selectedCards.find(element => element.id === card.id) || winnerCards.find(element => element.id === card.id)) ? 
                    console.log('not clickable')
                  : handleCardClick(card)
                }}
              />
            )
          })}
        </div>
      </StyledDeckContainer>
      
      <Modal show={showModal}>
        <h2>Gratulalok! Nyertel {getCurrentTriesNumber()} lepesbol</h2>
      </Modal>
    </Layout>
  )
}

export default DeckContainer