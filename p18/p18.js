function matrixB(size = 3, val = 0) {
    let matrix = []
    for (let row = 0; row < size; row++) {
        let inerr_arr = []
        for (col = 0; col < size; col++) {
            inerr_arr.push(val);
        }
        matrix.push(inerr_arr)
    }
    return matrix
}

function setindex(matrix, i, j, val) {
    matrix[i][j] = val;
}

// setindex(m,0,0,9)
// setindex(m,1,1,9)
// setindex(m,2,2,9)
// setindex(m,3,3,9)
// setindex(m,4,4,9)
// setindex(m,5,5,9)

//console.log(m.length)

function printMat(m) {
    for (let i = 0; i < m.length; i++) {
        console.log(...m[i]);
    }
}

function diag(m, val = 1) {
    for (let i = 0; i < m.length; i++) {
        m[i][i] = val;
    }
    return m;
}

function diag2(m, val = 1) {
    for (let i = m.length -1; i >= 0; i--) {
        setindex(m, m.length - 1 - i, i,  val);
    }
}

function box(m , val = 0){
    for(let i=0; i < m.length; i++){
        for(let j=0; j < m.length; j++){
            if( i == 0 || j == 0 || i == m.length -1 || j == m.length - 1){
                setindex(m, i,j, val)
            }
        }
    }



}

function main() {
    console.log("-------------------------1")
    let m = matrixB(9, 0)
    printMat(m)
    console.log("-------------------------2")
    printMat(diag(m,1))
    console.log("-------------------------3")
    m = matrixB(9, 0)
    diag2(m, 9)
    printMat(m)
    console.log("-------------------------4")
    m = matrixB(9, 0)
    box(m, 2)
    printMat(m)
    console.log("-------------------------5")
    m = matrixB(35, 0)
    diag(m,1)
    diag2(m, 9)
    box(m, 8)
    printMat(m)
    console.log("-------------------------6")
}

main()