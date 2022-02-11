document.addEventListener('DOMContentLoaded', () => {

  let squares = document.querySelectorAll(".square")
  squares.forEach((square) => {
    square.addEventListener("click", handleClick)
  })
})

const darkMode = document.getElementById("toggle")

darkMode.onclick = function(){
  darkMode.classList.toggle("active")
  document.body.classList.toggle("dark-theme")

}

function handleClick(event) {
  let square = event.target
  let position = square.id

  if (handleMove(position)) {
    setTimeout(() => { alert(`Jogador ${playerTime} venceu com a sequência ${seq} !`) }, 10)

  }
  updateSquare(position)
}

function updateSquare(position) {
  let square = document.getElementById(position.toString())
  let symbol = board[position]
  square.innerHTML = `<div class='${symbol}'></div>`
}

button = document.getElementById("restart")
button.addEventListener("click", restart)

function restart() {
  board = ["", "", "", "", "", "", "", "", ""]
  playerTime = 0
  gameOver = false
  updateSquares()
}

function updateSquares() {
  let squares = document.querySelectorAll(".square")

  squares.forEach((square) => {
    position = square.id
    symbol = board[position]

    if (symbol == "") {
      square.innerHTML = `<div class'${symbol}></div>`
    }
  })
}
