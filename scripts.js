const playerNameInput = Array.from(document.querySelectorAll('.player-input'))

playerNameInput.forEach(player => {
  player.addEventListener('click', () => {
    if (player.classList.contains('player-1')) {
      let player1Name = prompt("What's your name?")
      let player1Preference = prompt("Do you want to be X's or O's?")
      const player1 = playerFactory(`${player1Name}`,`${player1Preference}`)
      console.log(player1Preference)
      console.log(player1)      
    } else if (player.classList.contains('player-2')) {
      let player2Name = prompt("What's your name?")
      let player2Preference = prompt("Do you want to be X's or O's?")
      const player2 = playerFactory(`${player2Name}`,`${player2Preference}`)
      console.log(player2Preference)
      console.log(player2)
    }
  })
});

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
      console.log(tileCounter)
      tileCounter++
    })
    console.table(gameGrid)
    console.log(typeof gameGrid)
  }
  return createDomElements(gameGrid)
})();

function theTest() {
  console.log(typeof GameBoard)
  console.log(tileCounter)
  console.log(gameGrid)
  console.log(gameSquare)
  console.log(gameBoard)
}

function playerFactory(name, preference) {
  return {
    name, preference
  }
}

// const player1 = playerFactory(`${player1Name}, ${player1Preference}`)
// const player2 = playerFactory(`${player2Name}, ${player2Preference}`)

function playerTest() {
  console.log(player1)
  console.log(typeof player1)
  console.log(player2)
  console.log(typeof player2)
}


