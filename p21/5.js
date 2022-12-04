/*
החזר אות גדולה בכל תחילת מילה באנגלית
נגדיר שני משתנים
אחד מהם נגדיר כחיובי
נריץ לולאה על הסטרינג שלנו
אם חהחלק מזוהה כלא רווח וגם אות ראשונה נגדיל אותו
ונכניס אותו למשתנה הראשון שחצרנו
ונקבע את המשתנה השני כשלילי
אם לא נבדוק אם המשך הסטרינג שווה לרווח
ונכניס רווח לסטרינג
ונקבע את המשתנה השלילי כחיובי
אם לא נכניס את המשך הסטרינג למשתנה
ונדפיס את כולו

*/
const capitalizeWords = (str) => {
    let capitalizedWords = "";
    let isFirstLetter = true;
    for (let i = 0; i < str.length; i++) {
    if (isFirstLetter && str[i] !== " ") {
    capitalizedWords += str[i].toUpperCase();
    isFirstLetter = false;
    } else if (str[i] === " ") {
    capitalizedWords += " ";
    isFirstLetter = true;
    } else {
    capitalizedWords += str[i];
    }
    }
    return capitalizedWords;
    };
    
    let str = "hey mom shalom harpaz";
    console.log(capitalizeWords(str)); // -> "Hey Mom"