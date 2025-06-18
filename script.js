function createPlayer (playerNum) {
  const name = `Player ${playerNum}`;
  const marker = playerNum === 1 ? "X" : "O";
  return {name, marker};
}

function genRandomPosition(){
  let pos = Math.floor(Math.random() * 9);
  return pos
}

const GameBoard = (function(){
  const board = ["", "", "", "", "", "", "", "", ""];
  const getBoard = () => board;
  const displayBoard = () => console.log(board);
  const changeSpaceValue = (position, currentPlayer) => {
    board[position]=currentPlayer.marker;    
    return board
  }
  
  return {getBoard, displayBoard, changeSpaceValue}
})();

const GameController = (function(){
  const board = GameBoard.getBoard();
  const startGame = () => {
    GameBoard.displayBoard();
  };
  const winCheck = (board = GameBoard.getBoard()) => {
    //if board.length > 4, check for win conditions
    for (let pos of board) {
      if (pos==="") {continue;}
      else if (pos==="X") {
        console.log(`This pos has value of ${pos}`);
      } else if (pos==="O") {
        console.log(`This pos has value of ${pos}`);
      } else {
      console.log("Error with winCheck() function");
      }
    }
  }
  const player1 = createPlayer(1);
  const player2 = createPlayer(2);
  let activePlayer = player1;
  const switchPlayerTurn = () => activePlayer = activePlayer === player1 ? player2 : player1;
  const getActivePlayer = () => activePlayer;
  const turn = function(position = genRandomPosition(),player = getActivePlayer()) {
    if (board[position] != "") {console.log("This location is taken."); return};
    GameBoard.changeSpaceValue(position, player)
    GameBoard.displayBoard();
    switchPlayerTurn();
    // winCheck();
  }

  return {startGame, turn}
})();

//Start game
GameController.startGame()
GameController.turn()
GameController.turn()
GameController.turn()
GameController.turn()
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
