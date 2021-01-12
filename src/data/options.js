const deckOptions = () => {
  const array = [];
  for(var i = 3; i <= 10; i++) {
    array.push(i*2)
  }
  return array;
}

export default deckOptions;