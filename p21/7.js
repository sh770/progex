// 2.4 trim a string - remove the white spaces from the beginning and end of a string
// but not the white spaces in the middle of the string
// const trim = (str) => {};
// example:
// let str = "   hello world   ";
// console.log(trim(str)); -> "hello world"
/*
אנחנו רוצים לתפוס את הרווחים לפני ואחרי המילה ולמחוק אותם
לכן ניקח את הסטרינג שלנו
ניצור משתנה בשם התחלה עם הערך 0
ומשתנה בשם סוף עם הערך של אורך הסטרינג פחות אחד
בלולאה נבדוק עם הערך של הסטרינג במקום האפס שווה בדיוק לאפס
 ונמשיך לבדוק לאורך הסטרינג עד שהוא לא שווה לאפס והלולאה תעצור
אחר כך נבדוק מהכיוון השני מה שווה לאפס
 עד שהוא לא שווה לאפס והלולאה תעצור
 ואז נגדיר משתנה נוסף ונכתוב אליו את הסטרינג 
  בלולאה מההתחלה עד הסוף מאיפה שהלולאות הקודמות עצרו
ונחזיר את המשתנה שיצרנו


*/
const trim = (str) => {
    
    let start = 0;
    let end = str.length - 1;
    while (str[start] === " ") {
    start++;
    }
    while (str[end] === " ") {
    end--;
    }
    let trimmedString = "";
    for (let i = start; i <= end; i++) {
    trimmedString += str[i];
    // console.log(trimmedString)
    }
    return trimmedString;
    };
    
    let str = "    hello world     ";
    console.log(trim(str)); // -> "hello world"