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
  const rows = 3;
  const columns = 3;

  for (let i=0; i < rows; i++) {
    board[i] = []
    for (let j=0; j < columns; j++) {
      board[j] = board.push(Space());
    }
  }

  const displayBoard = () => board;

  const changePositionValue = (positionSelected, currentPlayer) => {
    board[positionSelected] = currentPlayer.marker;

    return board
  }
  
  return {displayBoard, changePositionValue}
})();


function createPlayer (playerNum) {
  const name = `Player ${playerNum}`;
  const marker = playerNum === 1 ? "X" : "O";
  return {name, marker};
}


const GameController = (function(){
  const board = GameBoard.display();

  const player1 = createPlayer(1);
  const player2 = createPlayer(2);
  let activePlayer = player1;

  const switchPlayerTurn = () => activePlayer = activePlayer === player1 ? player2 : player1;
  const getActivePlayer = () => activePlayer.name;

  const turn = function(positionSelected = 2, player = getActivePlayer()) {
    GameBoard.changePositionValue(positionSelected, player)
  }
  

  return {board, switchPlayerTurn, getActivePlayer, turn}

})();

console.log(GameController.getActivePlayer())

// Module Example (IIFEs)
// const Formatter = (function(){
//   const makeUppercase = (name = "Michael") => name.toUpperCase();

//   const writeToDom = (selector, message) => {
//     document.querySelector(selector).textContent = message;
//   };

//   return {makeUppercase, writeToDom}
// })();

// console.log(Formatter.makeUppercase());
