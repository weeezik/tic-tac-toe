const GameBoard = (function(){
  const board = ["_", "_", "|", "_", "|", "_", "_", "\n", "_", "_", "|", "_", 
    "|", "_", "_", "\n", " ", " ", "|", " ", "|", " ", " "];
  const display = () => console.log(`${board.join("")}`);
  const changePositionValue = (positionSelected, currentPlayer) => {
    //positionSelected from event listener on DOM eventually
    //currentPlayer.marker() gives the value we want to change the position to
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

  return {createPlayer};
})();

const GameController = (function(){
})();

GameBoard.display();

GameBoard.changePositionValue(2, Player.createPlayer(1))

GameBoard.display();

// Module Example (IIFEs)
// const Formatter = (function(){
//   const makeUppercase = (name = "Michael") => name.toUpperCase();

//   const writeToDom = (selector, message) => {
//     document.querySelector(selector).textContent = message;
//   };

//   return {makeUppercase, writeToDom}
// })();

// console.log(Formatter.makeUppercase());
