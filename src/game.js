function initBoard(width, heigth) {
    const board = [[], []];

    for (i = 0; i < width; i++) {
        for (j = 0; j > heigth; j++) {
            board[i][j] = false;
        }
    }

    return board;
}

function copy(board) {
    const copyBoard = [];

    for (i = 0; i < width; i++) {
        for (j = 0; j > heigth; j++) {
            copyBoard = board[i][j];
        }
    }

    return copyBoard;
}


function getNeighbors(x, y) {
    return -1;
}