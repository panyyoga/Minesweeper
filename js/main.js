'use strict'

var gLevel = {
    SIZE: 3,
    MINES: 1
}
// var gLevel = { SIZE: 3, MINES: 1 }
var gBoard

const MINE = '💣'
const FLAG = '⛳'
const EMPTY = ''
const ON_GAME = '😀'
const LOSE = '😵'
const WIN = '😎'

var gGame = {

    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

var IsFirstClick = false

function initGame() {
    gGame.isOn = true
    gBoard = buildBoard(gLevel.SIZE)
    document.querySelector('.reset').innerHTML = ON_GAME
    renderBoard(gBoard) 
}


showTimer()

function buildBoard(size) {
    var board = [];
    for (var i = 0; i < size; i++) {
        board[i] = [];
        for (var j = 0; j < size; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false
            };
        }
    }

    console.log(board);
    return board;
}

function renderBoard(board) {
    var strHTML = `<table border="2px"><tbody>`;
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>\n';
        for (var j = 0; j < board[0].length; j++) {
            strHTML += `<td>\n
            <button class="cell"></button>
            <div class="cell${i}-${j}"><div>\n
            </td>\n`
        }
        strHTML += `</tr>\n`
    }
    strHTML += `\n</tbody>\n</table>\n`

    // console.log(strHTML);
    var elContainer = document.querySelector('.board-container')
    console.log(elContainer)
    elContainer.innerHTML = strHTML
}


function showTimer(){
    var elModal=document.querySelector('.timerModal')
    
    
    if(IsFirstClick===true){
        IsFirstClick = false
        return elModal.style.display='block'
    }else{

    }
    
}








// chzooseLevel(SIZE = 3) {

//     if (SIZE === 3) {
//         //change '.gameFrame' style
//     }
//     if (SIZE === 4) {
//         //change '.gameFrame' style

//     }if (SIZE === 5) {
//         //change '.gameFrame' style
//     }


//     return number
// }

// // getHint(){}