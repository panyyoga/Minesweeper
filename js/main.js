'use strict'

var gLevel = { SIZE: 4, MINES: 1 }
var gBoard

const MINE = '💣'
const FLAG = '⛳'
const EMPTY = ''
const ON_GAME = '😀'
const LOSE = '😵'
const WIN = '😎'

var gGame = { 

    isOn: true, 
    shownCount: 0, 
    markedCount: 0,
    secsPassed: 0 
}

function initGame() {
    gGame = 
        { 
        isOn: true, 
        shownCount: 0, 
        markedCount: 0, 
        secsPassed: 0 
    }
    gBoard = buildBoard(gLevel.SIZE)
    document.querySelector('.reset').innerHTML = ON_GAME
    renderBoard(gBoard)
}

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
        strHTML += '<tr>';
        for (var j = 0; j < board[0].length; j++) {
            strHTML += `<td><button class="cell"></button></td>`
        }
        strHTML += `</tr>`
    }
    strHTML += `</tbody></table>`;
    var elContainer = document.querySelector('.board-container');
    console.log(elContainer);
    elContainer.innerHTML = strHTML;
}

