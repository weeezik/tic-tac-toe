const GameBoard = (function(){
  const board = ["_", "_", "|", "_", "|", "_", "_", "\n", "_", "_", "|", "_", 
    "|", "_", "_", "\n", " ", " ", "|", " ", "|", " ", " "];

  const display = () => `${board.join("")}`;
  
  return {display}
})();

console.log(GameBoard.display());

// Module Example (IIFEs)
// const Formatter = (function(){
//   const makeUppercase = (name = "Michael") => name.toUpperCase();

//   const writeToDom = (selector, message) => {
//     document.querySelector(selector).textContent = message;
//   };


//   return {makeUppercase, writeToDom}
// })();

// console.log(Formatter.makeUppercase());
