/* Create gameboard object as IIFE/module */

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

  function createDomElements(gameGrid) {
    gameGrid.forEach(square => {
      const gameSquare = document.createElement('div')
      gameContainer.appendChild(gameSquare)
      gameSquare.classList.add(`game-square-${tileCounter}`)
      gameSquare.addEventListener('click', () => {
        console.log('testing clicks')
      })
      console.log(tileCounter)
      tileCounter++
    })
    console.table(gameGrid)
    console.log(typeof gameGrid)
  }

  const initDomElements = createDomElements(gameGrid)
  return {
    initDomElements,
    gameGrid,
  }
})();

/* Factory function for player creation */

function playerFactory(name) {

  const _getPlayerName = () => name
  const playerName = _getPlayerName()
  const add = (a, b) => a + b
  const multiply = (a, b) => a * b
  
  return {
    playerName, add, multiply
  }
}

const player1 = playerFactory('Player 1')
const player2 = playerFactory('Player 2')
