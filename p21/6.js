/*
היפוך סטרינג והפיכת אותיות גדולות לקטנות
*/
const reverseString = (str) =>{
    let tmp ="";
    for (let i = 0 ; i < str.length ; i++) {
        //המשתנה הזמניה מקבל את חלקי הסטרינג ומרכיב אותם הפוך למשתנה זמני
        tmp = str[i] + tmp;
        }
  //וכאן הוא מחזיר אותם עם המרה לאותיות קטנות
    return tmp.toLowerCase();
};

let srt = "Pizza";
console.log(reverseString("Pizza"));