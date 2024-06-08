const boardSize = 15;
const winLength = 5;
let board = [];
let currentPlayer = 'X';
let playerXScore = 0;
let playerOScore = 0;
const scoreboard = document.getElementById('scoreboard');
const currentPlayerDisplay = document.getElementById('currentPlayer');
const boardElement = document.getElementById('board');
for (let i = 0; i < boardSize; i++) {
 board[i] = [];
 for (let j = 0; j < boardSize; j++) {
  board[i][j] = '';
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.dataset.row = i;
  cell.dataset.col = j;
  cell.addEventListener('click', handleCellClick);
  boardElement.appendChild(cell);
 }
}

function handleCellClick(event) {
 const row = event.target.dataset.row;
 const col = event.target.dataset.col;
 if (board[row][col] !== '') return;
 board[row][col] = currentPlayer;
 event.target.textContent = currentPlayer;
 if (checkWin(row, col)) {
  alert(`Player ${currentPlayer} won!`);
  if (currentPlayer === 'X') playerXScore++;
  else playerOScore++;
  updateScoreboard();    
  resetBoard();
  return;
 }
 currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
 currentPlayerDisplay.textContent = `Current player: ${currentPlayer}`;
}

function checkWin(row, col) {
 return (checkDirection(row, col, 1, 0) || checkDirection(row, col, 0, 1) || checkDirection(row, col, 1, 1) || checkDirection(row, col, 1, -1));
}

function checkDirection(row, col, rowDelta, colDelta) {
 let count = 1;
 count += countDirection(row, col, rowDelta, colDelta);
 count += countDirection(row, col, -rowDelta, -colDelta);
 return count >= winLength;
}

function countDirection(row, col, rowDelta, colDelta) {
 let r = parseInt(row) + rowDelta;
 let c = parseInt(col) + colDelta;
 let count = 0;
 while (r >= 0 && r < boardSize && c >= 0 && c < boardSize && board[r][c] === currentPlayer) {
  count++;
  r += rowDelta;
  c += colDelta;
 }
 return count;
}

function updateScoreboard() {
 document.getElementById('playerXScore').textContent = `X: ${playerXScore}`;
 document.getElementById('playerOScore').textContent = `O: ${playerOScore}`;
}

function resetBoard() {
 board = [];
 while (boardElement.firstChild) boardElement.removeChild(boardElement.firstChild);
 for (let i = 0; i < boardSize; i++) {
  board[i] = [];
  for (let j = 0; j < boardSize; j++) {
   board[i][j] = '';
   const cell = document.createElement('div');
   cell.classList.add('cell');
   cell.dataset.row = i;
   cell.dataset.col = j;
   cell.addEventListener('click', handleCellClick);
   boardElement.appendChild(cell);
  }
 }
}
