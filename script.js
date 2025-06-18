function createPlayer (playerNum) {
  const name = `Player ${playerNum}`;
  const marker = playerNum === 1 ? "X" : "O";
  return {name, marker};
}

const GameBoard = (function(){
  const board = [];
  const displayBoard = () => console.log(board);
  const changeSpaceValue = (currentPlayer) => {
    board.push(currentPlayer.marker);

    return board
  }
  
  return {displayBoard, changeSpaceValue}
})();

const GameController = (function(){
  const player1 = createPlayer(1);
  const player2 = createPlayer(2);
  let activePlayer = player1;
  const switchPlayerTurn = () => activePlayer = activePlayer === player1 ? player2 : player1;
  const getActivePlayer = () => activePlayer;
  const turn = function(player = getActivePlayer()) {
    GameBoard.changeSpaceValue(player)
    GameBoard.displayBoard();
    switchPlayerTurn();
  }

  return {switchPlayerTurn, getActivePlayer, turn}
})();
//Start game
GameBoard.displayBoard()

GameController.turn()
GameController.turn()
GameController.turn()
GameController.turn()
GameController.turn()
GameController.turn()













// Module Example (IIFEs)
// const Formatter = (function(){
//   const makeUppercase = (name = "Michael") => name.toUpperCase();

//   const writeToDom = (selector, message) => {
//     document.querySelector(selector).textContent = message;
//   };

//   return {makeUppercase, writeToDom}
// })();

// console.log(Formatter.makeUppercase());
