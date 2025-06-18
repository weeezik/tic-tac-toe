function Space() {
  let value = "";

  const addMarker = (player) => {
    value = player.marker
  }

  const getValue = () => value;

  return {addMarker, getValue}
}

const GameBoard = (function(){
  const board = [];

  // const rows = 3;
  // const columns = 3;
  // for (let i=0; i < rows; i++) {
  //   board[i] = [];
  //   for (let j=0; j < columns; j++) {
  //     board[i] = board.push(Space());
  //   }
  // }

  const displayBoard = () => board;

  const changeSpaceValue = (positionSelected, currentPlayer) => {
    //In the 3rd column and the first row, place an "X"
    board[positionSelected] = currentPlayer.marker;
    return board
  }
  
  return {displayBoard, changeSpaceValue}
})();


function createPlayer (playerNum) {
  const name = `Player ${playerNum}`;
  const marker = playerNum === 1 ? "X" : "O";
  return {name, marker};
}


const GameController = (function(){
  const board = GameBoard.displayBoard();

  const player1 = createPlayer(1);
  const player2 = createPlayer(2);
  let activePlayer = player1;

  const switchPlayerTurn = () => activePlayer = activePlayer === player1 ? player2 : player1;
  const getActivePlayer = () => activePlayer.name;

  const turn = function(positionSelected = 2, player = getActivePlayer()) {
    GameBoard.changeSpaceValue(positionSelected, player)
  }
  

  return {board, switchPlayerTurn, getActivePlayer, turn}

})();

// console.log(GameController.getActivePlayer())
console.log(GameBoard.displayBoard());

// Module Example (IIFEs)
// const Formatter = (function(){
//   const makeUppercase = (name = "Michael") => name.toUpperCase();

//   const writeToDom = (selector, message) => {
//     document.querySelector(selector).textContent = message;
//   };

//   return {makeUppercase, writeToDom}
// })();

// console.log(Formatter.makeUppercase());
