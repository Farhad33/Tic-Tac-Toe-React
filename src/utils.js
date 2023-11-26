export const buildBoard = (num) => {
    let board = []
    for(let row = 0; num > row; row++) {
        let rowArray = []
        for(let column = 0; num > column; column++) {
            rowArray.push(' ')
        }
        board.push(rowArray)
    }
    return board
}

function checkDiagonalWinner(board) {
    let n = board.length;
    let mainDiagonal = true, antiDiagonal = true;

    for (let i = 0; i < n; i++) {
        if (board[i][i] !== board[0][0] || board[i][i] === " ")
            mainDiagonal = false;
        if (board[i][n - 1 - i] !== board[0][n - 1] || board[i][n - 1 - i] === " ")
            antiDiagonal = false;
    }

    if (mainDiagonal) return `${board[0][0]} Wins!`;
    if (antiDiagonal) return `${board[0][n - 1]} Wins!`;

    return '';
}

export function checkGameStatus(board, firstPlayer, secondPlayer) {
    for(let rowIndex = 0; board.length > rowIndex; rowIndex++) {
        let rowCounter = {}
        let columnCounter = {}
        for(let columnIndex = 0; board.length > columnIndex; columnIndex++) {
    
          // check rowCell
          let rowCell = board[rowIndex][columnIndex]
          if(rowCell !== ' ') {
            rowCounter[rowCell] = rowCounter[rowCell] ? rowCounter[rowCell] + 1 : 1
          }
    
          // check columnCell
          let columnCell = board[columnIndex][rowIndex]
          if(columnCell !== ' ') {
            columnCounter[columnCell] = columnCounter[columnCell] ? columnCounter[columnCell] + 1 : 1
          }
    
          if(rowCounter[firstPlayer] === board.length || columnCounter[firstPlayer] === board.length ) {
            return `${firstPlayer} Wins!`
          }
          if(rowCounter[secondPlayer] === board.length || columnCounter[secondPlayer] === board.length ) {
            return `${secondPlayer} Wins!`
          }
    
        }

        // check diagonal
        var mainDiagonal = true, antiDiagonal = true;
        if (board[rowIndex][rowIndex] !== board[0][0] || board[rowIndex][rowIndex] === " ")
            mainDiagonal = false;
        if (board[rowIndex][board.length - 1 - rowIndex] !== board[0][board.length - 1] || board[rowIndex][board.length - 1 - rowIndex] === " ")
            antiDiagonal = false;
    
      }
      if (mainDiagonal) return `${board[0][0]} Wins!`;
      if (antiDiagonal) return `${board[0][board.length - 1]} Wins!`;
  
      return ''
}