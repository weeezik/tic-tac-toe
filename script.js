console.log("Node prints things");

function createGameboard (){
  const gameBoard = ["_", "_", "|", "_", "|", "_", "_", "\n", "_", "_", "|", "_", 
    "|", "_", "_", "\n", " ", " ", "|", " ", "|", " ", " "];

  const displayBoard = function() {
    return `${gameBoard.join("")}`
  }

  return {gameBoard, displayBoard}
}

gameBoard = createGameboard();
console.log(gameBoard.displayBoard());

// const Gameboard = {
//   board: ["_", "_", "|", "_", "|", "_", "_", "\n", "_", "_", "|", "_", "|", "_", "_", "\n", " ", " ", "|", " ", "|", " ", " "],
// }

// console.log(Gameboard.board.join(""))

