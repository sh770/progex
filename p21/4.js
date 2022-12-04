/*
נקבע משתנה נגדיר שהחלק של הסטרינג במיקום ה 0 
מוגדר כהמרה לאות גדולה
ונפתח לולאה שתכניס את שאר חלקי הסטרינג למשתנה
ונדפיס אותו חזרה
*/

const capitalize = (str) => {
    let capitalizedString = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
    capitalizedString += str[i];
    }
    return capitalizedString;
    };
    
    let str = "hello world";
    console.log(capitalize(str)); // -> "Hello world"