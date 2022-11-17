//Q4
/**
 * Given a string and a non-negative int n,
 *  return a larger string that is n copies of the original string.
 * 
 * string_times('Hi', 2) → 'HiHi'
 * string_times('Hi', 3) → 'HiHiHi'
 * string_times('Hi', 1) → 'Hi'
 *  */
let str ="hi";
let n = 4;
 function string_times(str, n) {
        console.log (str.repeat(n));
    }

 string_times(str, n);

function string_times2(str, n) {
    let mystr = "";
    for(let i = 0; i < n; i++){
        mystr += str;
    }
    return mystr;
}

console.log(string_times2("Hi", 19))