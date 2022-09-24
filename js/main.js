'use strict'
window.addEventListener("contextmenu", e => e.preventDefault()) // cancel the context menu on the entie window

var gLevel = {
    SIZE: 4,
    MINES: 3
}
// var gLevel = { SIZE: 3, MINES: 1 }
var gBoard

var gAvailbleLocations = []

const MINE = '💣'
const FLAG = '⛳'
const EMPTY = ''
const ON_GAME = '😀'
const LOSE = '😵'
const WIN = '😎'
const CAREFUL = '😳'

var gGame = {

    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

var isFirstClick = true
var gRedFlag = false

var invalidCell = false

var gTimeInterval
var gStartTime
var gTimePassed
var cellID = 0

function initGame() {
    isFirstClick = true
    gGame.isOn = true
    gBoard = buildBoard(gLevel.SIZE)
    createMines(gBoard,0)
    setMinesNegsCount(gBoard)

    document.querySelector('.reset').innerHTML = ON_GAME
    renderBoard(gBoard)
}

function buildBoard(size) {
    var board = [];
    for (var i = 0; i < size; i++) {
        board[i] = [];
        for (var j = 0; j < size; j++) {
            board[i][j] = {
                name: `CELL ${i},${j}`,
                isMine: false,
                minesAroundCount: 0,
                isShown: false,
                isMarked: false,
            }
        }
    }
    return board
}

function renderBoard(board) {
    var strHTML = `<table border="2px"><tbody>`;
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>\n';
        for (var j = 0; j < board[0].length; j++) {
            var cell = getCellEl(board[i][j])
            var shown = board[i][j].isShown ? 'shown' : ' '
            strHTML += `<td>
            <div id="cell" class="cell cell-${i}-${j} ${shown}"title="${i}-${j}"onclick
            = "cellClicked(this,${i},${j})"onmousedown="createPizza(this)">${cell}
            </div></td>`
        }
        strHTML += `</tr>\n`
    }
    strHTML += `\n</tbody>\n</table>\n`
    var elContainer = document.querySelector('.gameFrame')
    elContainer.innerHTML = strHTML
}

function getCellEl(cell) {
    if (!cell.isShown || !cell.minesAroundCount) {
        return ' '
    } else if (cell.isMine) {
        return '💣'
    } else if (cell.minesAroundCount) {
        return cell.minesAroundCount
    }
}

function setMinesNegsCount(board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            board[i][j].minesAroundCount = checkNegs(board, i, j);
        }
    }
}

// function checkClick(){
//     if (invalid)return
// }else{continue}

function cellClicked(elCell, i, j) {
    if (gBoard[i][j].isShown) {
        return
    } else {

        if (isFirstClick) {
            isFirstClick = false
            createMines(gBoard, gLevel.MINES)
            setMinesNegsCount(gBoard)
        }
        gBoard[i][j].isShown = true

        if (gBoard[i][j].minesAroundCount === 0) {
            expandShown(gBoard, elCell, i, j)
        }
        renderBoard(gBoard)
    }
}


//^
function setLevel(num) {
    gLevel.SIZE=num
    if (num === 4) {
        gLevel.MINES = 3
    } else if (num === 6) {
        gLevel.MINES = 6
    } else if (num === 8) {
        gLevel.MINES = 12
    }
    initGame()
}
//^
// function getElCell(i, j) {
//     const elCell = document.getElementById(`cell-${i}-${j}`)
//     return elCell
// }

// function cellMarked(elCell,i,j) {
//     if(gBoard[i][j].isShown) return
//     if(!gGame.isOn) {
//         gGame.isOn = true
//         startTimer()
//     }
//     gGame.markedCount++
//     gBoard[i][j].isMarked = !gBoard[i][j].isMarked
//     elCell.classList.toggle('mark')
//     checkGameOver()
// }

function expandShown(board, elCell, rowIdx, colIdx) {
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (i === rowIdx && j === colIdx) continue;
            if (i >= 0 && j >= 0 && i < board.length && j < board[0].length) {
                if (board[i][j].isShown === false) {
                    cellClicked(elCell, i, j);
                }
            }
        }
    }
}

function checkNegs(board, rowIdx, colIdx) {
    var minesNegsCount = 0;
    for (var i = (rowIdx - 1); i <= (rowIdx + 1); i++) {
        for (var j = (colIdx - 1); j <= (colIdx + 1); j++) {
            if (i === rowIdx && j === colIdx) continue;
            if ((i >= 0 && j >= 0) && (i < board.length && j < board[0].length)) {
                if (board[i][j].isMine === true) {
                    minesNegsCount++;
                }
            }
        }
    }
    return minesNegsCount;
}

function getLocations(size) {
    var locations = []
    var board = [];
    for (var i = 0; i < size; i++) {
        board[i] = [];
        for (var j = 0; j < size; j++) {
            board[i][j] = {
                pos: {
                    i: i,
                    j: j
                }
            };
            locations.push(board[i][j].pos)
        }
    }
    return locations
}

function createMines(board, amount) {
    var i
    var j
    for (let k = 0; k < amount; k++) {
        i = getRandomIntInclusive(0, gLevel.SIZE-1)
        j = getRandomIntInclusive(0, gLevel.SIZE-1)
        board[i][j].isMine = true
    }
}

function createMat(rowCount, colCount) {
    var mat = []
    var iCount = 0
    for (var i = 0; i < rowCount; i++) {
        mat[i] = [i, j]
        for (var j = 0; j < colCount; j++) {
            mat[i][j] = ++iCount
            cellName = mat[i][j]
        }
    }
    return mat
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ShowFlag(ev) {
    ev.preventDefault()
    var elCell = document.querySelector('.cell')
    if (!gRedFlag) {
        gRedFlag = true
        elCell.classList.toggle('FFLLAAGG')
    } else {
        elCell.classList.toggle('FFLLAAGG')
    }
}

function createPizza() {
    var strHTML = `<h1>🍕</h1>`
    var elPizza = document.querySelector('.pizza')
    elPizza.innerHTML = strHTML
    // return 'pizza'
}


function createSteak() {
    var strHTML = `<h1>🥩</h1>`
    var elPizza = document.querySelector('.pizza')
    elPizza.innerHTML = strHTML
    // return 'pizza'
}

function checkClick(event, elCell, i, j) {
    if (gGame.isOn === true) {
        if (event.which === 3) {
            if (gBoard[i][j].isShown === true) return;
            cellMarked(elCell, i, j);
        }
        if (event.which === 1) {
            if (gBoard[i][j].isMarked === true) return;
            cellClicked(elCell, i, j);
        }
    }
}