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

function setindex(matrix, i, j, val=0) {
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


function matrixToArray(m){
    let arr = []
    for(let i = 0; i < m.length; i++){
        // arr.push(...m[i])
        for(let j = 0; j < m.length; j++){
            arr.push(m[i][j])
        }
    }
    return arr
    
    /** input
     *  1 1 1
     *  1 0 1
     *  1 1 1
     * 
     */
    // output:[1, 1, 1, 1, 0, 1, 1, 1, 1]
}

function arrayToMatrix(arr){
    console.log(Math.sqrt(arr.length))
    console.log("-------5--")
    let m = matrixB(Math.sqrt(arr.length)); // creat matrix 
    let x = 0; // index array
    
    // tow for loops that run all over the matrix:
    
    for (let i = 0; i < Math.sqrt(arr.length); i++){ 
        for (let j = 0; j < Math.sqrt(arr.length); j++){ 
            m[i][j] = arr[x]; //assignt array value to matrix 
            x++;
        }
    } return m;
}
    
    // Function discoverIndex1(x, y, size){
    
    // let counter = 0;
    
    // //tow for loops that run all over the matrix:
    
    // for (let i 0; i < size; i++){
    
    // for (let j = 0; j < size; j++) {
    
    // if((x i) && (y == j)) return counter; //the counter indicat the index array counter++;
    
    // }
    
    // return "the index doesn't exist in the matrix";
    
    // }
// function ArraytoMatrix(arr){

//     /**
//      * input: [1, 1, 1, 1, 0, 1, 1, 1, 1].lengh = size**2
//      * 
//      * output:
//      *  1 1 1
//      *  1 0 1
//      *  1 1 1
//      * 
//      * 
//      */
// }


// function indexC(i,j,size){

//     /**
//      * 
//      * 
//      *  input i = 1 , j = 2 , size = 3:
//      *  (1,1) = center
//      *  1  1  1
//      *  1  0 (1)
//      *  1  1  1
//      * 
//      * 
//      * 
//      * output = 5 index of the array that represent the matrix
//      * [1,1,1,1,0,(1),1,1,1]
//      */
// }

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
    m = matrixB(9, 0)
    diag(m,1)
    diag2(m, 9)
    box(m, 8)
    printMat(m)
    console.log("-------------------------6")
    matrixB(5, 0);
    let arr2 = matrixToArray(m);
    console.log(arr2)
    console.log(...arr2)
    console.log("-------------------------7")
    matrixB(15,0)
    printMat(m)

    matrixToArray(m)
    console.log(88 ,m)
    console.log("-------------------------17")
    let m2 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    console.log(97, m2)
    // printMat(m2)
    arrayToMatrix(m2)
    
    console.log(99, ...m2)

    // console.log(arrayToMatrix(m))
    console.log("-------------------------8")
    // let q = [[1,2,3],[4,5,6],[7,8,9]]
    // let arr = matrixToArray(q);
    // console.log(...arr)
    console.log("-------------------------test")
}

main()