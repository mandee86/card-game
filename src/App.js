import React, { useState, useEffect } from 'react'

// styles
import { GlobalStyles } from './styles/GlobalStyles.styles';

// containers
import StartContainer from './containers/StartContainer'
import DeckContainer from './containers/DeckContainer'
import RulesContainer from './containers/RulesContainer'

// data
import { memoryCardsArray } from './data/cards';

// router
import { Router, navigate } from "@reach/router"

const App = () => {

  const shuffleArray = (array) => {
    const newArray = [...array];
    newArray.sort(() => Math.random() - 0.5);

    return newArray;
  }

  const [deckSize, setDeckSize] = useState(+localStorage.getItem('deckSize') || 20);
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem('cards')) || shuffleArray(memoryCardsArray()));
  const [selectedCards, setSelectedCards] = useState(JSON.parse(localStorage.getItem('selectedCards')) || []);
  const [winnerCards, setWinnerCards] = useState(JSON.parse(localStorage.getItem('winnerCards')) || []);

  // handle selectedCards and winnerCards on selectedCards change
  useEffect(() => {
    if(selectedCards.length === 2) {
      if(selectedCards[0].name === selectedCards[1].name) {
        setWinnerCards([...winnerCards, selectedCards[0], selectedCards[1]])
        localStorage.setItem('winnerCards', JSON.stringify([...winnerCards, selectedCards[0], selectedCards[1]]))
      }
      setTimeout(() => {
        setSelectedCards([])
        localStorage.setItem('selectedCards', JSON.stringify([]));
      }, 500);
    }
  }, [selectedCards]);

  // set size of deck and cards array
  const handleSetDeck = (size) => {
    setDeckSize(size);
    localStorage.setItem('deckSize', +size);
    const newArray = memoryCardsArray().slice(0,size);
    const shuffledArray = shuffleArray(newArray);
    setCards(shuffledArray);
    localStorage.setItem('cards', JSON.stringify(shuffledArray));
  }

  // set selected cards array
  const handleSelectCard = (card) => {
    if(winnerCards.find(element => element.id === card.id) || selectedCards.find(element => element.id === card.id)) {
      setSelectedCards([...selectedCards]);
      localStorage.setItem('selectedCards', JSON.stringify([...selectedCards]));
    }
    else if (selectedCards.length < 2) {
      setSelectedCards([...selectedCards, card]);
      localStorage.setItem('selectedCards', JSON.stringify([...selectedCards, card]));
    }
  }

  // navigate to link
  const handleNavigate = (link) => {
    navigate(link);
  }

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Router>
          <RulesContainer
            exact path="/"
            onNavigate = {() => handleNavigate('/start')}
          />
          <StartContainer
            path="/start"
            restart={(selectedOption) => {
              setSelectedCards([]);
              localStorage.setItem('selectedCards', JSON.stringify([]));
              setWinnerCards([]);
              localStorage.setItem('winnerCards', JSON.stringify([]));
              handleSetDeck(selectedOption)
              handleNavigate('/game')
            }}
            deckSize={deckSize}
          />
          <DeckContainer
            path="/game"

            // board
            cards={cards}
            selectedCards={selectedCards}
            setSelectCard={handleSelectCard}
            winnerCards={winnerCards}

            // start settings
            restart={(selectedOption) => {
              setSelectedCards([]);
              localStorage.setItem('selectedCards', JSON.stringify([]));
              setWinnerCards([]);
              localStorage.setItem('winnerCards', JSON.stringify([]));
              handleSetDeck(selectedOption)
            }}
            deckSize={deckSize}

            // modal
            showModal = {+winnerCards.length === +deckSize}
          />
        </Router>

        

        {/* {(+winnerCards.length === +deckSize) && (
          setShowModal(true)
        )} */}
      </div>
    </>
  );
}

export default App;
