// Restart game button
let restartButton = document.querySelector("#b")
// Grabs all the squares
let squares = document.querySelectorAll("td")

// Clear all the squares
function clearBoard() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = " "
  }
}

restartButton.addEventListener("click", clearBoard);
// check the square marker

// for loop to add event listeners to all the squares