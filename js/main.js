'use strict'

var gLevel = {
    SIZE: 4,
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

var gTimeInterval
var gStartTime
var gTimePassed

function initGame() {
    gGame.isOn = true
    gBoard = buildBoard(gLevel.SIZE)
    document.querySelector('.reset').innerHTML = ON_GAME
    
    // var pos = getRandPos(gBoard)
    // createMines(pos)// 
    // chooseLevel()
    // console.log(chooseLevel());
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
                isMarked: false,
                pos: {
                    i: i,
                    j: j
                }



            };
        }
    }
    console.log('%c buildBoard()  --> board :', 'background: #222; color: #bada55',board);
    return board;
}

function renderBoard(board) {
    var strHTML = `<table border="2px"><tbody>`;
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>\n';
        for (var j = 0; j < board[0].length; j++) {
            
            strHTML += `<td>
            <div class="divcell ${i}-${j}">
            <button title="${i}-${j}" 
                class="cell cell${i},${j} " 
                onclick= "cellClicked(this,${i},${j})">
            </button>
            </div>
            </td>`
        }
        strHTML += `</tr>\n`
    }
    strHTML += `\n</tbody>\n</table>\n`
    var elContainer = document.querySelector('.gameFrame')
var titelOfXOfCell = ('%c Oh my heavens! ', 'background: #222; color: #bada55')
    console.log('%c injectin HTML into an element class \'.gameFrame\'  : ', 'background: #222; color: #bada55')
    console.log(xOfCell)
    console.log('elContainer:' , elContainer)
    elContainer.innerHTML = strHTML
}

var handler = function () {
    var date = new Date();
    var milsec = date.getMilliseconds();
    var sec = date.getSeconds();
    var min = date.getMinutes();
    document.getElementById("time").textContent = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec) + ":" + (milsec < 10 ? "0" + milsec : milsec);
}

function showTimer() {
    var elModal = document.querySelector('.timerModal')
    if (IsFirstClick === true) {
        IsFirstClick = false
        elModal.style.display = 'block'
    }
}

console.table(createMines(4, 4))
function createMines(rowCount, colCount){
    var mat = []
    for(var i = 0; i < rowCount; i++){
        mat[i] = []
        for(var j = 0; j < colCount; j++){
            mat[i][j] = 'BOMB'
        }
    }


    console.log('matBomb:', mat);
    return mat
}

function cellClicked(elCell, i, j){
var cell = gBoard[i][j]
console.log(cell);
elCell.getA
    
//cellReveal()


    if (!cell.isMarked) {
        cell.isMarked = true
        elCell.classList.toggle('cez')
    } else if(cell.isMarked===true) {
        cell.isMarked = false
    }




    elCell.classList.toggle('marked')
    IsFirstClick = true
    showTimer()
    handler()
    setInterval(handler, 8)
    var elReloj = document.querySelector('.time')
    elReloj.style.backgroundColor = "#39F"
    elReloj.style.color = "yellow"
    changePositionForDiv(elReloj)
    console.log(cell)
}

function chooseLevel(size) {
    if (size === 3) {
        gLevel.SIZE = 3
    }
    if (size === 4) {
        //change '.gameFrame' style
        gLevel.SIZE = 4
    }
    if (size === 5) {
        //change '.gameFrame' style
        gLevel.SIZE = 5
    }
    return gLevel.SIZE
}

function changePositionForDiv(el) {
    el.classList.add('second-position-timer')
}

// function chooseLevel(level) {
//     document.querySelector(".reset-btn").style.display = "inline"
//     resetTableNums(level)
//     shuffleCellsNums(level)
//     renderTable(level)
// }
























var xOfCell =`
'\n<td>\n   <div class="divcell ₪{i}-{j}>\n   <button \n       title="₪{i}-{j}" \n       class="cell cell₪{i},{j} " \n       onclick= "cellClicked(this,₪{i},{j})">\n   </button>\n  <div>\n</td>\n'`