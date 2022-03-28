document.addEventListener('DOMContentLoaded', () => {

  let squares = document.querySelectorAll(".square")
  squares.forEach((square) => {
    square.addEventListener("click", handleClick)
  })
})

let drawTheme = () => { document.body.classList.toggle("draw-theme") 
}
const darkMode = document.getElementById("toggle")

darkMode.onclick = function () {
  darkMode.classList.toggle("active")
  document.body.classList.toggle("dark-theme")
} 

function handleClick(event) {
  let square = event.target
  let position = square.id

  if (handleMove(position) == true) {
    let result = document.getElementById("result")
    setTimeout(() => {
      result.innerHTML = `Jogador "${symbols[playerTime].toUpperCase()}" venceu com a sequência ${seq[0]}-${seq[1]}-${seq[2]}`
      playerTime = (playerTime == 0 ? 1 : 0)
    }, 10)
  } else if (!gameOver && countTurn === 9) {
    let result = document.getElementById("result")
    setTimeout(() => { result.innerHTML = `Houve um empate!` }, 10)
    drawTheme()
  }
  updateSquare(position)
}

turn.innerHTML = `TURN: ${symbols[playerTime].toUpperCase()}`

function updateSquare(position) {
  let square = document.getElementById(position.toString())
  let symbol = board[position]
  square.innerHTML = `<div class='${symbol}'></div>`
  let turn = document.getElementById("turn")
  setTimeout(() => { turn.innerHTML = `TURN: ${symbols[playerTime].toUpperCase()}` }, 10)
}

button = document.getElementById("restart")
button.addEventListener("click", restart)

function restart() {
  if (!gameOver && countTurn === 9){
    drawTheme()
  }
  board = ["", "", "", "", "", "", "", "", ""]
  gameOver = false
  result.innerHTML = ""
  countTurn = 0
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
