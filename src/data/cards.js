const cards = ['splendex', 'ts', 'angular', 'sass', 'webpack', 'react', 'd3', 'redux', 'jenkins', 'postcss'];

export const memoryCardsArray = () => {
  const array = [];
  for(var i = 0; i < cards.length; i++) {
    for(var j = 0; j < 2; j++) {
      array.push({ 'id': `${i}${j}`, 'name': cards[i]})
    }
  }
  return array;
}