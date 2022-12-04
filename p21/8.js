/*
חישוב ערך של סדרת פיבונצי באורך של n

*/
let count =0;
const fibonacci = (n) => {
    /*
נבדוק אם 
n 
שווה לאחד
או שווה לשתים
ונחזיר אחד
*/
    if (n === 1 || n === 2) {
        return 1;
    }
    /*
    אם לא נחזיר את הפונקציה עם המספר שקבלנו פחות אחד
    פלוס הפונקציה עם המספר שקבלנו פחות שתים
    ונתחיל שוב את הרקוסיה עד שנקבל מספר קטן משתים
    */
    // console.log("===========0")
    // console.log(count + " run")
    // console.log("===========1")
    // console.log(count + " run")

    // console.log(fibonacci(n - 1))
    // console.log(fibonacci(n - 2))
    // console.log("===========2")
    // console.log(fibonacci(n - 1) + fibonacci(n - 2))
    // count++
    // console.log("===========3")

    // console.log( "n=: " + n );
    return fibonacci(n - 1) + fibonacci(n - 2);
};

let n = 7;
console.log(fibonacci(n)); // -> 13

