export const buildBoard = (size) => {
    let board = []
    for (let i = 0; i < size; i++) {
        board.push([...Array(size)])
    }
    return board
}

const checkArray = (board) => {
    for(const row of board) {
        let set = new Set(row)
        if(set.size === 1 && !set.has(undefined)) return true
    }
    return false
}

export function checkGameStatus(board) {
    // check rows
    if(checkArray(board)) return true

    // check columns
    let newboard = []
    for (let i = 0; i < board.length; i++) {
        let newRow = []
        for (let j = 0; j < board.length; j++) {
            const cell = board[j][i]
            newRow.push(cell)
        }
        newboard.push(newRow)
    }
    if(checkArray(newboard)) return true

    // check diagonals
    newboard = []
    let counter = board.length - 1
    let firstRow = []
    let secondRow = []
    for (let i = 0; i < board.length; i++) {
        firstRow.push(board[i][i])
        secondRow.push(board[counter][i])
        counter--
    }
    newboard.push(firstRow)
    newboard.push(secondRow)
    if(checkArray(newboard)) return true

    return false
}