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
      gameSquare.classList.add(`game-square-${tileCounter}`, 'game-square')
      gameSquare.addEventListener('click', () => {
        gameSquare.classList.add('played-o')
      })
      console.log(tileCounter)
      tileCounter++
    })
    console.table(gameGrid)
    console.log(typeof gameGrid)

  }

  function resetTheGame() {
    const resetBtn = document.querySelector('.reset-game')
    resetBtn.addEventListener('click', () => {
      Array.from(document.querySelectorAll('.game-square')).forEach((item) => item.classList.remove('played-x', 'played-o'))
    })
  }

  const gameReset = resetTheGame()
  const initDomElements = createDomElements(gameGrid)
  // const handleInputs = handlePlayerInputs(gameGrid)
  return {
    initDomElements,
    gameGrid,
    gameReset
    // handleInputs
  }
})();

function gameFlow(player1, player2) {
  const getPlayerStuff = () => {
      console.log(player1.add(2, 15))
      console.log(player1.playerName)
      console.log(player1.multiply(5,6))
      console.log(player2.playerName)
  }

  const logging = () => { console.log('testing functionality')
  }

  const getPlayerName = () => {
    return player1.playerName
  }

  const lggs = logging()
  const playerStuff = getPlayerStuff()
  const getName =  getPlayerName()

  // let movesCounter = 0

  // gameSquare.addEventListener('click', () => {
  //   const getCount = movesCounter <= 8 ? movesCounter++ : alert('the game is over')
  //   return getCount
  // })

  // if (movesCounter <= 8) {
  //   movesCounter++
  // } else {
  //   alert(`The count is already at ${movesCounter} and the game is over.`)
  //   movesCounter = 0
  // }


  // if (movesCounter % 2 === 0) {
  //   gameSquare.classList.add('played-x')
  // } else {
  //   gameSquare.classList.add('played-0')
  // }

  return {
      playerStuff, lggs, getName
  }
}

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

const player1 = playerFactory('John')
const player2 = playerFactory('Mike')
