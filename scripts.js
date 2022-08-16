const GameBoard = (function() {
  const gameGrid = [
  '1A',
  '1B',
  '1C',
  '2A',
  '2B',
  '2C',
  '3A',
  '3B',
  '3C',
  ]
  let tileCounter = 0 
  const gameContainer = document.querySelector('.game-container')

  function createDOMElements(gameGrid) {
    gameGrid.forEach(square => {
      tileCounter++
      const gameSquare = document.createElement('div')
      gameContainer.appendChild(gameSquare)
      gameSquare.classList.add(`game-square-${tileCounter}`)
      console.log(tileCounter)
    })
    console.table(gameGrid)
  }

  return createDOMElements(gameGrid)
})();

function theTest() {
  console.log(tileCounter)
  console.log(gameGrid)
  console.log(gameSquare)
  console.log(gameBoard)
}