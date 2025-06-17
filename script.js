function createGameboard (){
  const gameBoard = ["_", "_", "|", "_", "|", "_", "_", "\n", "_", "_", "|", "_", 
    "|", "_", "_", "\n", " ", " ", "|", " ", "|", " ", " "];

  const displayBoard = function() {
    return `${gameBoard.join("")}`
  }

  return {gameBoard, displayBoard}
}

// gameBoard = createGameboard();
// console.log(gameBoard.displayBoard());

// Module Example (IIFEs)
const Formatter = (function(){
  const makeUppercase = (name = "Michael") => name.toUpperCase();

  const writeToDom = (selector, message) => {
    document.querySelector(selector).textContent = message;
  };


  return {makeUppercase, writeToDom}
})();

console.log(Formatter.makeUppercase());
