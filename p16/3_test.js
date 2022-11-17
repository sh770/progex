//Q3
/**
 * Given two int values, return their sum.
 *  Unless the two values are the same, 
 * then return double their sum.
 * 
 * 
 * sum_double(1, 2) → 3
 * sum_double(3, 2) → 5
 * sum_double(2, 2) → 8
 *  */
let a = 2;
let b = 3;

 function sum_double(a, b) {
    if (a==b) {
        return a*4;
    }else{
            return a+b;
        }
    }
   console.log(sum_double(a, b))
   console.log(sum_double(5, 5))
   console.log(sum_double(9, 3))