//Q8
/**
 * Given a positive int n, return true if it contains a 1 digit.
 *  Note: use % to get the rightmost digit, and / to discard the rightmost digit.
 * 
 * has_one(10) → True
 * has_one(22) → False
 * has_one(220) → False
 * */

//  function has_one(n) {
//     if(n === 1){
//     return true
//     }else{ 
//         return false
//     }
//     }
// console.log(has_one(5));
// ---------------------------
function has_one(n) {
    while(n > 0){
        if(n % 10 === 1){
            return true;
        }
        console.log(n);
        n = Math.floor(n / 10);
        console.log(n);

    }
    return false;
}
console.log(has_one(100))