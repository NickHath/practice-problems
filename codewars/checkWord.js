// let first = true;

function checkWord( board, word ) {
  console.log(`checkWord (\nboard: ${board},\n word: ${word})`);
  let found = false, first = firstGuess(board);
  if (word === '') {
    return true;
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0] && (adjacentToDash(board, i, j) || first)) {
        board[i][j] = '-';
        found = true;
      } 
    }
  }
  if (!found) {
    return false;
  }
  // first = false;
  return checkWord(board, word.slice(1));
}

  function adjacentToDash(board, i, j) {
    if (board[i - 1] && board[i - 1][j] === '-') {
      return true;      
    } else if (board[i] && board[i][j + 1] === '-') {
      return true;
    } else if (board[i + 1] && board[i + 1][j] === '-') {
      return true;
    } else if (board[i] && board[i][j - 1] === '-') {
      return true;
    } else if (board[i - 1] && board[i - 1][j - 1] === '-') {
      return true;
    } else if (board[i + 1] && board[i + 1][j + 1]) {
      return true;
    } else if (board[i + 1] && board[i + 1][j - 1]) {
      return true;
    } else if (board[i - 1] && board[i - 1][j + 1]) {
      return true;
    }
    else {
      return false;
    }
  } 

function firstGuess(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i] && board[i][j] === '-') {
        return false;
      }
    }
  }
  return true;
}


var testBoard = [
  ["E","A","R","A"],
  ["N","L","E","C"],
  ["I","A","I","S"],
  ["B","Y","O","R"]
];

var dashTestBoard = [
  ["E","-","R","A"],
  ["N","L","E","C"],
  ["I","A","I","S"],
  ["B","Y","O","R"]  
]

// console.log( checkWord( testBoard, "EARS" ) ) //== false );
// console.log( checkWord( testBoard, "RSCAREIOYBAILNEA" ) ) //== true, "Must be able to check indefinite word lengths going in all directions" );
console.log( checkWord( testBoard, "ROBES" ) ) //== false, "Valid guesses have to be adjacent" );
// console.log( checkWord( testBoard, "CARS" ) ) //== false, "Valid guesses cannot wrap around the edges of the board" );
