const playerNameInput = Array.from(document.querySelectorAll('.player-input'))
const player1Btn = document.querySelector('.player-1')
const player2Btn = document.querySelector('.player-2')
const player1Test = document.querySelector('.player-1').addEventListener('click', collectInfo)
const player2Test = document.querySelector('.player-2').addEventListener('click', playerFactory)

// document.querySelector('.player-1').addEventListener('click', () => {
//   let player1Name = prompt("What's your name?")
//   let player1Preference = prompt("Do you want to be X's or O's?")
//   const player1 = playerFactory(`${player1Name}`,`${player1Preference}`)
//   console.log(player1, typeof player1)
// })
// const player2Input = document.querySelector('.player-2').addEventListener('click', () => {
//   let player2Name = prompt("What's your name?")
//   let player2Preference = prompt("Do you want to be X's or O's?")
//   const player2 = playerFactory(`${player2Name}`,`${player2Preference}`)
//   console.log(player2, typeof player2)
//   return {
//     player2
//   }
// })

function collectInfo() {
  let playerName = prompt("What's your name?")
  // let playerName = getName
  let playerPreference = prompt("Do you want to be X's or O's?")
  // let playerPreference = getPlayerPreference
  // const test = alert(`${playerName} --> ${playerPreference}`)
  const factoryTest = () => {
    console.log(`${playerName} --> ${playerPreference}`)
  }
  const newPlayer = factoryTest()

  return {
    newPlayer
  }
}


const player2Input = document.querySelector('.player-2').addEventListener('click', () => {
  let player2Name = prompt("What's your name?")
  let player2Preference = prompt("Do you want to be X's or O's?")
  const player2 = playerFactory(`${player2Name}`,`${player2Preference}`)
  console.log(player2, typeof player2)
  return {
    player2
  }
})


// const Listners = (function() {

//   let player1Name
//   let player1Preference
//   let player1
//   let player2Name
//   let player2Preference
//   let player2

//   function listenForPlayers() {
//     playerNameInput.forEach(player => {
//       player.addEventListener('click', () => {
//         if (player.classList.contains('player-1')) {
//           player1Name = prompt("What's your name?")
//           player1Preference = prompt("Do you want to be X's or O's?")
//           player1 = playerFactory(`${player1Name}`,`${player1Preference}`)
//           console.log(player1Preference)
//           console.log(player1) 
//         } else if (player.classList.contains('player-2')) {
//           player2Name = prompt("What's your name?")
//           player2Preference = prompt("Do you want to be X's or O's?")
//           player2 = playerFactory(`${player2Name}`,`${player2Preference}`)
//           console.log(player2Preference)
//           console.log(player2)
//         }
//       })
//     });
//   }


//   const assignPlayers = listenForPlayers()

//   return {
//     assignPlayers, player1, player2
//   }

// })();

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

function playerFactory(name, preference) {
  const getPlayerInfo = () => {
    console.log(name),
    console.log(preference)
  }

  const add = (a, b) => a + b;
  
  return {
    add, getPlayerInfo, name, preference
  }
}

/* ++===== Testing Function ======= */

function playerFactory(name, preference) {

  
  const getPlayerInfo = () => {
    console.log(name),
    console.log(preference)
  }

  const add = (a, b) => a + b;
  
  return {
    add, getPlayerInfo, name, preference
  }
}

const josh = playerFactory('josh', 'x')
