const GameBoard = (function() {
  this.gameGrid = [
  '1A',
  '1B',
  '1C',
  '2A',
  '2B',
  '2C',
  '3A',
  '3B',
  '3C',
  ];
  this.tileCounter = 0;
  this.gameContainer = document.querySelector('.game-container');

  return this.gameGrid.forEach(square => {
    this.tileCounter++ 
    const gameSquare = document.createElement('div')
    this.gameContainer.appendChild(gameSquare)
    gameSquare.classList.add(`game-square-${this.tileCounter}`) 
  });
})();

function theTest() {
  console.log(this.tileCounter)
  console.log(this.gameGrid)
  console.log(gameSquare)
}