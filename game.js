let board = ["", "", "", "", "", "", "", "", ""]
let playerTime = 0
let gameOver = false
let symbols = ["o", "x"]

let winStates = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
]

function handleMove(position) {
  if (gameOver) {
    return
  }

  if (board[position] == "") {
    board[position] = symbols[playerTime]

    gameOver = isWin()

    if (gameOver == false) {
      playerTime =  (playerTime == 0 ? 1 : 0)
    }
  }
  return gameOver
}


function isWin() {
  for (let i = 0; i < winStates.length; i++) {
    seq = winStates[i]

    let pos1 = seq[0] -1
    let pos2 = seq[1] -1
    let pos3 = seq[2] -1

    if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != "") {
      return true
    }
  }
  return false
}
