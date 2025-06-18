function createPlayer (playerNum) {
  const name = `Player ${playerNum}`;
  const marker = playerNum === 1 ? "X" : "O";
  return {name, marker};
}

const GameBoard = (function(){
  const board = [];
  const displayBoard = () => board;
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
  }

  return {switchPlayerTurn, getActivePlayer, turn}
})();

console.log(GameBoard.displayBoard())
console.log(GameBoard.changeSpaceValue(GameController.getActivePlayer()));
console.log(GameBoard.displayBoard())
GameController.switchPlayerTurn();
console.log(GameBoard.changeSpaceValue(GameController.getActivePlayer()));













// Module Example (IIFEs)
// const Formatter = (function(){
//   const makeUppercase = (name = "Michael") => name.toUpperCase();

//   const writeToDom = (selector, message) => {
//     document.querySelector(selector).textContent = message;
//   };

//   return {makeUppercase, writeToDom}
// })();

// console.log(Formatter.makeUppercase());
