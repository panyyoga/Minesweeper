//!making sure i understand!
const dataStr01expCellConcept = `'\n<td>\n   <div class="divcell ₪{i}-{j}>\n   <button \n       title="₪{i}-{j}" \n       class="cell cell₪{i},{j} " \n       onclick= "cellClicked(this,₪{i},{j})">\n   </button>\n  <div>\n</td>\n'`
var x1 = dataStr01expCellConcept
/*
const HardLookingConcept =`'\n<td>\n   <div class="divcell ₪{i}-{j&#%^$@#^!n</td>\n'`
var x1 = HardLookingConcept
*/
var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]
var arr3 = [7, 8, 9]

var ArrTD = [
    arr1,
    arr2,
    arr3
]

var arr4 = [1,  2,  3,   4,  5,  6,  7,  8,  9, 10]
var arr5 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
var arr6 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
var arr7 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
var arr8 = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
var arr9 = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50]

var ArrTDBig = [
    arr4,
    arr5,
    arr6,
    arr7,
    arr8,
    arr9
]


[
    [{i: 0,j: 0}],[{i: 1,j: 0}],[{i: 2,j: 0}] 
]


[   [{i: 0,j: 0}],[{i: 1,j: 0}],[{i: 2,j: 0}],
    [{i: 0,j: 1}],[{i: 1,j: 1}],[{i: 2,j: 1}],
    [{i: 0,j: 2}],[{i: 1,j: 2}],[{i: 2,j: 2}]
]

var gBoardExample = [   [{i: 0,j: 0}],[{i: 1,j: 0}],[{i: 2,j: 0}],
[{i: 0,j: 1}],[{i: 1,j: 1}],[{i: 2,j: 1}],
[{i: 0,j: 2}],[{i: 1,j: 2}],[{i: 2,j: 2}]
]



function getLocations(size){
    var locations = []
    var board = [];
    for (var i = 0; i < size; i++) {
        board[i] = [];
        for (var j = 0; j < size; j++) {
            board[i][j] = {pos: {i: i,j: j}};
            locations.push(board[i][j].pos)
        }
    }
    return locations
}


















function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function copyMat(mat) {
    var newMat = []

    for (var i = 0; i < mat.length; i++) {
        newMat[i] = []
        for (var j = 0; j < mat[0].length; j++) {
            newMat[i][j] = mat[i][j]
        }
    }
    return newMat
}

function getRandomColor() {
    var letters = "0123456789ABCDEF"
    var color = "#"
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}



// function addNewBall() {
//     //GET RAND POS
//     var randPos = getRandPos(gBoard) //^  APPROVED//!    {I:4  J:7}
//     //console.log(randPos) // for example {i: 2, j: 7} keep changing...
//     //MODEL
//     gBoard[randPos.i][randPos.j].gameElement = BALL

//     //^      [ {I:4  J:} ] [ {I:  J:7} ] ---> the chosen place position //! gBoard[i][j]

//     //~gBoard[randPos.i][randPos.j].gameElement = BALL     UPDATING THE MODEL :)
//     //~gBoard[randPos.i][randPos.j].gameElement = BALL
//     //~gBoard[randPos.i][randPos.j].gameElement = BALL
//     //DOM
//     renderBoard(gBoard)

// }




//^
//^   new position {i,j}
//^                                   [{1},{2},{3}]----->f() ----> {}
//!
// // findRandPos() - takes BOARD (2Darr of obJs/arr/primitives) brings POSITION ("POS") in a form of an obj ---->  
// // expected:   [{},{},{}],[{},{},{}],[{},{},{}] --->   [9objs{} --->the chosen obj //^    {}  
// // function findRandPos: creates or takes! a mat (creatMat()) and returns an obj for exmple//^     {I:4  J:7}
// console.table(ArrTDBig)
// var demoRandPos = findRandPos(ArrTDBig)
// console.log('%c Here 🖐 "empty" cell for you :', 'background: #222; color: #c90076' ,demoRandPos)

// function findRandPos(mat) {
//     var posibilitiesArr = []
//     var randIndxOFarr = getRandomIntInclusive(1,mat.length)
//     var randIndxOFarr2 = getRandomIntInclusive(1,mat.length)
//     for (var i = 0; i < mat.length; i++) {
//         for (var j = 0; j < mat[i].length; j++) {
//             var cell = mat[i][j]
//             posibilitiesArr.push({
//                 i:randIndxOFarr,
//                 j:randIndxOFarr2
//             })
//         }
//     }
//     //console.log('%c YES!', 'background: #222; color: #fdfcb8' ,posibilitiesArr[randIndxOFarr])
//     return posibilitiesArr[randIndxOFarr]
// }


//^BoomMat -CREATES
//!
// //&expected BoomMat:   [1,2,B][4,5,B][7,8,B]
//var demoBoom =  console.log('%c createBoomMat:','background: #222; color: #3adaa2',createBoomMat(3, 3))
// function createBoomMat(rowCount, colCount) {
//     var namesArr = []
//     var mat = []
//     var cellName
//     var iCount=0
//     //var jCount=0
//     for (var i = 0; i < rowCount; i++) {
//         mat[i] = []
//         for (var j = 0; j < colCount; j++) {
//             mat[i][j] = ++iCount
//             cellName = mat[i][j]
//             cellName = mat[i][j]!==0&&mat[i][j]%3===0? "boom":mat[i][j];
//             namesArr.push(cellName)
//             // console.log('cellName and type:',cellName);
//             // console.log(`pure strings HUMAN LANGUEGE the name of this cell is:${cellName}`)    
//         }
//     }
//     // console.log('%c Name of CELL InArr:','background: #222; color: #3adaa2', namesArr);
//     return namesArr
// }


//^simpleMat -CREATES
//!
//&expected:   [1,2,3][4,5,6][7,8,9]
// // console.log('%c buildBoard()  --> board :', 'background: #222; color: #bada55');
// var demoSimple = createMat(3, 3)
// //console.log('%c simpleMatWithTmpltStr- NO OBJ included:', 'background: #222; color: #3adaa2' ,demoSimple)
// function createMat(rowCount, colCount) {
//     var mat = []
//     var cellName
//     var iCount=0
//     for (var i = 0; i < rowCount; i++) {
//         mat[i] = [i, j]
//         for (var j = 0; j < colCount; j++) {
//             mat[i][j] = ++iCount
//             cellName = mat[i][j]  
//         }
//     }
//     return mat
// }





var locationSTemp
locationSTemp.push(getLocations())
console.log(locationSTemp);
var loactionTemp = {i: 1,j: 1}
//&expected mineMat:   [{1},{2},{mine},{4},{5},{mine},{7},{8},{mine}]
function createMine(location,locations) {
    for(let i=0; i<locations.length; i++){
        if(location === locations[i])
        {gBoard[i].isMine = true
        console.log('a bomb succecfuly installed')}
    }
}