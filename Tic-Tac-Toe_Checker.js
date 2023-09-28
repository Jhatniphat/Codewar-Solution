function isSolved(board) {
    // TODO: Check if the board is solved!
    
    for(let i = 0 ; i < board.length ; i++){
        if(board[0][i] === 1 && board[1][i] === 1 && board[2][i] === 1) return 1
        if(board[0][i] === 2 && board[1][i] === 2 && board[2][i] === 2) return 2
        if(board[i].join('') === '111') return 1
        if(board[i].join('') === '222') return 2
    }
    if(board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) return 1
    if(board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2) return 2
    if(board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1) return 1
    if(board[0][2] === 2 && board[1][1] === 2 && board[2][0] === 2) return 2
    for(let i = 0 ; i < board.length ; i++){
        if(board[i][0] === 0 || board[i][1] === 0 || board[i][2] === 0) return -1
    }
    return 0
}

// function isSolved(board) {
//     board = board.join('-').replace(/,/g,'');
//     if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
//     if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
//     if(/0/.test(board)) return -1;
//     return 0;
//  }