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
let m = matrixB(6,8)

function setindex(matrix,i,j,val) {
    return matrix[i][j] = val;
}

// setindex(m,0,0,9)
// setindex(m,1,1,9)
// setindex(m,2,2,9)
// setindex(m,3,3,9)
// setindex(m,4,4,9)
// setindex(m,5,5,9)

function printMat(m){

    for (let i= 0; i < m.length; i++){
    console.log(m[i]);};

}
console.log("-------------------------1")

printMat(m)


console.log("-------------------------2")
function diag(m , val = 1){
for ( let ii= 0; ii < m.length; ii++) {
    m[ii][ii] = val;
    }
    console.log(m);
}

diag(m , 7);

console.log("-------------------------3")


