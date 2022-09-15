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
      gameSquare.dataset.squareValue = `${square}`
      tileCounter++
    })
    console.table(gameGrid)
    console.log(typeof gameGrid)
    console.log(`The tile counter is ${tileCounter}`)
  }

  const initDomElements = createDomElements(gameGrid)

  return {
    initDomElements,
    gameGrid
  }
})();

function gameFlow(player1, player2) {
  let movesCounter = 0
  const gameSquares = Array.from(document.querySelectorAll('.game-square'))

  const getPlayerStuff = () => {
      console.log(player1.add(2, 15))
      console.log(player1.playerName)
      console.log(player1.multiply(5,6))
      console.log(player2.playerName)
      console.log(`The moves counter is set to ${movesCounter}.`)

  }

  const logging = () => { console.log('testing functionality')
  }

  const getPlayerName = () => {
    return player1.playerName
  }

  const updateGameBoard = () => {
    gameSquares.forEach(square => {
      square.addEventListener('click', () => {
        if (movesCounter <= 8) {
          if (movesCounter % 2 === 0) {
            square.classList.add('played-x')
            ++movesCounter
            console.log(`The odd moves counter is set to ${movesCounter}.`)
            checkForWinner()
          } else {
            square.classList.add('played-o')
            ++movesCounter
            console.log(`The even moves counter is set to ${movesCounter}.`)
            checkForWinner()
          }
        }
      }, { once: true })
    })
  }

  function checkForWinner() {
    let xSquares = 0
    let oSquares = 0 
    const xPlayedSquares = []
    const oPlayedSquares = []
    const messagingBox = document.querySelector('.message-text')
    gameSquares.forEach(square => {
      if (square.classList.contains('played-x')) {
        xSquares++
        xPlayedSquares.push(square.dataset.squareValue)
        console.log(square.dataset.squareValue)
        console.log(xSquares)
        console.table(xPlayedSquares)
      } else if (square.classList.contains('played-o')) {
        oSquares++
        oPlayedSquares.push(square.dataset.squareValue)
        console.log(oSquares)
        console.table(oPlayedSquares)
      }
    })

    if (xSquares >= 3 || oSquares >= 3) {
      console.log(`We're ready to test. xSquares is ${xSquares} and oSquares is ${oSquares}.`)
        const val1 = "1A"
        const val2 = "2A"
        const val3 = "3A"
        const val4 = "1B"
        const val5 = "2B"
        const val6 = "3B"
        const val7 = "1C"
        const val8 = "2C"
        const val9 = "3C"

        if ((xPlayedSquares.includes(val1) && xPlayedSquares.includes(val2) && xPlayedSquares.includes(val3)) || 
            (xPlayedSquares.includes(val4) && xPlayedSquares.includes(val5) && xPlayedSquares.includes(val6)) ||
            (xPlayedSquares.includes(val7) && xPlayedSquares.includes(val8) && xPlayedSquares.includes(val9)) ||
            (xPlayedSquares.includes(val1) && xPlayedSquares.includes(val5) && xPlayedSquares.includes(val9)) ||
            (xPlayedSquares.includes(val3) && xPlayedSquares.includes(val5) && xPlayedSquares.includes(val7)) ||
            (xPlayedSquares.includes(val1) && xPlayedSquares.includes(val4) && xPlayedSquares.includes(val7)) ||
            (xPlayedSquares.includes(val2) && xPlayedSquares.includes(val5) && xPlayedSquares.includes(val8)) ||
            (xPlayedSquares.includes(val3) && xPlayedSquares.includes(val6) && xPlayedSquares.includes(val9))) {
          messagingBox.textContent = 'X is the Winner!'   
        } else if ((oPlayedSquares.includes(val1) && oPlayedSquares.includes(val2) && oPlayedSquares.includes(val3)) || 
            (oPlayedSquares.includes(val4) && oPlayedSquares.includes(val5) && oPlayedSquares.includes(val6)) ||
            (oPlayedSquares.includes(val7) && oPlayedSquares.includes(val8) && oPlayedSquares.includes(val9)) ||
            (oPlayedSquares.includes(val1) && oPlayedSquares.includes(val5) && oPlayedSquares.includes(val9)) ||
            (oPlayedSquares.includes(val3) && oPlayedSquares.includes(val5) && oPlayedSquares.includes(val7)) ||
            (oPlayedSquares.includes(val1) && oPlayedSquares.includes(val4) && oPlayedSquares.includes(val7)) ||
            (oPlayedSquares.includes(val2) && oPlayedSquares.includes(val5) && oPlayedSquares.includes(val8)) ||
            (oPlayedSquares.includes(val3) && oPlayedSquares.includes(val6) && oPlayedSquares.includes(val9))) {
          messagingBox.textContent = 'X is NOT the Winner! O has won the game!'
        } else {
          messagingBox.textContent = 'Tied Game -- please play again!'
        };
    }
  }

  const resetTheGame = () => {
    const resetBtn = document.querySelector('.reset-game')
    resetBtn.addEventListener('click', () => {
      Array.from(document.querySelectorAll('.game-square')).forEach((item) => item.classList.remove('played-x', 'played-o'))
      updateGameBoard()
      movesCounter = 0
    })
  }

  const resetGame = resetTheGame()
  const flow = updateGameBoard()
  const lggs = logging()
  const playerStuff = getPlayerStuff()
  const getName =  getPlayerName()

  return {
      playerStuff, 
      lggs, 
      getName, 
      flow, 
      movesCounter, 
      resetGame
  }
}

/* Factory function for player creation */

function playerFactory(name) {

  const _getPlayerName = () => name
  const playerName = _getPlayerName()
  const add = (a, b) => a + b
  const multiply = (a, b) => a * b
  
  return {
    playerName, 
    add, 
    multiply
  }
}

const player1 = playerFactory('John')
const player2 = playerFactory('Mike')

const startBtn = document.querySelector('.start-game')
startBtn.addEventListener('click', gameFlow(player1, player2).flow)
const resetBtn = document.querySelector('.reset-game')
resetBtn.addEventListener('click', gameFlow(player1, player2).resetGame)