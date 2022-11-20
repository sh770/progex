function matrixB(size, val = 0) {
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
// console.log("-------------------------")

let m = matrixB(3,0)

// console.log(m)

// console.log("-------------------------")




// console.log(m)

// console.log("-------------------------")

function setindex(matrix,i,j,val) {
    return matrix[i][j] = val;
}

// console.log("-------------------------")


// console.log()
    setindex(m,2,2,9)


// console.log("-------------------------")

    /**
     * [0,0,0]
     * [0,0,0]
     * [0,0,0]
     */

function printMat(m){

    for (let i= 0; i < m.length; i++){
    console.log(m[i]);};

}
console.log("-------------------------")

printMat(m)


console.log("-------------------------")