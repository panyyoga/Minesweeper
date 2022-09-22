function buildBoard() {
    var board = []
    //Create the Matrix 10 * 12 
    board = createMat(10, 12)
    //Put FLOOR everywhere and WALL at edges
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {


            
            //^
            board[i][j] = {
                type: FLOOR,
                gameElement: null

            }                  //^ MODEL  {type:FLOOR,gameElement:null} 
            //^
            if (i === 0 || i === board.length - 1) board[i][j].type = WALL               //^ first and last in the ROW (i === 0 || i === board.length - 1)
            else if (j === 0 || j === board[i].length - 1) board[i][j].type = WALL       //^ HERE I WANT TO BREAK IT DOWN
        }
    }

    // TODO: Place the gamer and two balls
    board[gGamerPos.i][gGamerPos.j].gameElement = GAMER
    board[4][7].gameElement = BALL
    board[3][3].gameElement = BALL


    //  // Add the passages
    //^  board[0][Math.floor(board[0].length / 2)].type = FLOOR
    //^  board[board.length - 1][Math.floor(board[0].length / 2)].type = FLOOR
    //^  board[Math.floor(board.length / 2)][0].type = FLOOR
    //^  board[Math.floor(board.length / 2)][board[0].length - 1].type = FLOOR
 
     
     return board;

    console.log(board);
    return board;
}






function addNewBall() {
    //GET RAND POS
    var randPos = getRandPos(gBoard) //^  APPROVED//!    {I:4  J:7}
    //console.log(randPos) // for example {i: 2, j: 7} keep changing...
    //MODEL
    gBoard[randPos.i][randPos.j].gameElement = BALL

    //^      [ {I:4  J:} ] [ {I:  J:7} ] ---> the chosen place position //! gBoard[i][j]

    //~gBoard[randPos.i][randPos.j].gameElement = BALL     UPDATING THE MODEL :)
    //~gBoard[randPos.i][randPos.j].gameElement = BALL
    //~gBoard[randPos.i][randPos.j].gameElement = BALL
    //DOM
    renderBoard(gBoard)

}

//^ Gives back AVILABLE RANDOM POSITION  (HAS TO BE FREE, HAS TO BE NO WALL) IM GIVING YOU://!    {I:   J:}
function getRandPos(board) { // this function only gives me a random position.. checking if its "availble"...
    var positions = []
    console.log(board)
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            var cell = board[i][j]
            if (cell.type !== WALL && !cell.gameElement) { // cell.type!! im checking the cell {type: gameElement:}
                //!cell.gameElement the same as 'null'
                positions.push({ //i pushed all of the posiblities into an arr-in a form of {}
                    i: i,
                    j: j
                })
            }
        }
    }
    var randIdx = getRandomInt(0, positions.length)
    return positions[randIdx] //! and of course returning a random obj{} out of the arr
}