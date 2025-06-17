const GameController = (function(){
  const changePositionValue = (board, position, value) => board[position] = value;
  const printBoard = (board) => console.log(board);
  return {printBoard, changePositionValue};
})();

const GameBoard = (function(){
  const board = ["_", "_", "|", "_", "|", "_", "_", "\n", "_", "_", "|", "_", 
    "|", "_", "_", "\n", " ", " ", "|", " ", "|", " ", " "];

  const display = () => `${board.join("")}`;
  
  return {display}
})();


const Player = (function(){
  posValueObject = {position: "", marker: ""};
  const placeMarker = function () {
    posValueObject = {position: 1, marker: "X"}
    // posValueObject[position] = 1; 
    // posValueObject[marker] = "X";
    return posValueObject;
  };

  return {placeMarker};
})();

console.log(Player.placeMarker());
GameController.printBoard(GameBoard.display());

GameController.changePositionValue(GameBoard.display(), Player.placeMarker().position, Player.placeMarker().marker)

GameController.printBoard(GameBoard.display());





// Module Example (IIFEs)
// const Formatter = (function(){
//   const makeUppercase = (name = "Michael") => name.toUpperCase();

//   const writeToDom = (selector, message) => {
//     document.querySelector(selector).textContent = message;
//   };

//   return {makeUppercase, writeToDom}
// })();

// console.log(Formatter.makeUppercase());
