// הגדרת משתנים
let strUp = "";
let strDn = "";
//console.log(typeof(strUp));
// הגדרת פונקציה
function printStar(numSatr) {
   //הגדרת לולאה 
   //בתוך הלולאה מגדירים משתנה בשם i 
   //   קובעים ש אם numSatr קטן מ i
   // נוסיף אחד ל i
   for (let i = 1; i < numSatr; i++) {
      // קוראים שוב למשתנים שהגדרנו למעלה
      strUp = "";
      strDn = "";
// נקבע משתנה בשם j ונריץ לולאה
// ניתן לו את הערך 1 ואם הוא שווה או קטן מ i נוסיף לו אחד
      for (let j = 1; j <= i; j++) {
         // אם ניתן להפחית אחד
         // strUp אז המשתנה 
         // 
         if (j - 1) {
            strUp = strUp + j.toString().padStart(2, "0") + " ";
            strDn = (j - 1).toString().padStart(2, "0") + " " + strDn;
         }
         else {
            strUp = j.toString().padStart(2, "0") + " " + strUp;
         }
      }
      console.log("   ".repeat(numSatr - i) + strUp + strDn);
   }
}
printStar(31);