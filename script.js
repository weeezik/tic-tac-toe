const GameBoard = (function(){
  const board = ["_", "_", "|", "_", "|", "_", "_", "\n", "_", "_", 
    "|", "_", "|", "_", "_", "\n", " ", " ", "|", " ", "|", " ", " "];
  const display = () => console.log(`${board.join("")}`);
  const changePositionValue = (positionSelected, currentPlayer) => {
    board[positionSelected] = currentPlayer.marker;

    return board
  }
  
  return {display, changePositionValue}
})();

const Player = (function(){
  const createPlayer = (playerNum) => {
    const name = `Player ${playerNum}`;
    const marker = playerNum === 1 ? "X" : "O";
    return {name, marker}
  }
  // const selectPosition = () => {}

  return {createPlayer};
})();

const GameController = (function(){
  const board = GameBoard.display();

  const player1 = Player.createPlayer(1)
  const player2 = Player.createPlayer(2);
  let activePlayer = player1

  const switchPlayerTurn = () => activePlayer = activePlayer === player1 ? player2 : player1;
  const getActivePlayer = () => activePlayer;

  return {board, switchPlayerTurn, getActivePlayer}

})();

GameController.board;
GameBoard.changePositionValue(3, Player.createPlayer(1))
GameBoard.display();
console.log(GameController.getActivePlayer());

// Module Example (IIFEs)
// const Formatter = (function(){
//   const makeUppercase = (name = "Michael") => name.toUpperCase();

//   const writeToDom = (selector, message) => {
//     document.querySelector(selector).textContent = message;
//   };

//   return {makeUppercase, writeToDom}
// })();

// console.log(Formatter.makeUppercase());
