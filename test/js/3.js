let str = ""; 

function printNum(num){    
  for(let i=1 ; i<=num ; i++){
    str="";    // איפוס של המחרוזת כשהלולאה למטה נגמרת
   
    for(j=i ; j ; j--){       // לולאה יורדת   
          if(j-1){   // נכנס לכאן רק לאחר התו השני 
            // הדפסת שאר האיברים
            // השימוש עם לולאה יורדת חסך לי עבודה
             str = j + " " + str + (j-1) + " " ;
          }
          else{
            // הדפסה רק של התו הראשון בפרמידה
             str = j + " " + str  ; 
          } 
    }       
      // מדפיס את המחרוזת + הרווח
      //  כל פעם יורד קצת num ה
      // ככל שהשורה גודלת כדי שיתאים לצורה של פרמידה
      // str עם הרווח מודפסת גם המחרוזת 
      //   "                "1 
      //   "           " 1  2
       console.log("  ".repeat(num - i) + str);         
  }
}
printNum(9);