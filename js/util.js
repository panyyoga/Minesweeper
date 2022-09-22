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
// console.log(buildBoard(gLevel.SIZE))
// getPosInsideArr(buildBoard(gLevel.SIZE))



// getPosInsideArr([mat])
// function getPosInsideArr(mat){
//     //Create the Matrix(input:size) 
//     //Put FLOOR everywhere and WALL at edges
//     var newArr = []
//     newArr = buildBoard(gLevel.SIZE)


//         for (var i = 0; i < newArr.length; i++) {
//             newArr[i] = []
//             for (var j = 0; j < mat[0].length; j++) {
//                 newArr.push({i,j})
//             }
//         }
//         console.log(newArr)
//         return newArr

// }

// //&expected:   [1,2,3][4,5,6][7,8,9]
// var multSimpTable = [];
// var iCount=0
// var jCount=0
// for(var i = 0; i < 10; i++){
//     multSimpTable[i] = []
//     for(var j = 0; j < 10; j++){
//         multSimpTable[i][j] = iCount++
//         console.log(iCount)
//     }
// }
// console.table(multSimpTable)

//&expected:   [1,2,$][4,5,$][7,8,$]
var simpleMat = createMat(3, 3)
console.log('simpleDollarMat', simpleMat)

function createMat(rowCount, colCount) {
    var cellName
    var namesArr = []
    var mat = []
var choosenStr = ` the name of this cell is ${cellName}`
var iCount=0
var jCount=0
    for (var i = 0; i < rowCount; i++) {
        mat[i] = []
        for (var j = 0; j < colCount; j++) {
            // var currCell =mat[i][j]
            mat[i][j] = iCount++
            // cellName = mat[i][j]
            cellName = mat[i][j]%3===0? "$$$":mat[i][j];
            namesArr.push(cellName)
            // if(mat[i][j]===3 && mat[i][j]===6 && mat[i][j]===9){
                //     console.log('$') 
                //     mat[i][j] = 'R'
                // iCount.toString()
                // iCount+='$'
                // mat[i][j] =iCount
            }
        }
        console.log('cellName:',cellName);
        console.log('namesCellInArr:', namesArr);
        return mat
    }







// //&expected:   [1,2,3][4,5,6][7,8,9]
// var simpleMat = createMat(3, 3)
// console.log('simpleMatWithTS noOBJincluded:', simpleMat)

// function createMat(rowCount, colCount) {
//     var mat = []

//     for (var i = 0; i < rowCount; i++) {
//         mat[i] = [i, j]
//         for (var j = 0; j < colCount; j++) {
//             //^ mat[i][j] = (`${i},${j}`)
//             mat[i][j] = (`${j}`)
//         }
//     }
//     return mat
// }