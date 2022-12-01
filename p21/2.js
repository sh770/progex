//נגדיר פונקציה מקוצרת
const selectionSort = (arr) => {
    // לולאת פור על המערך
    for (let i = 0; i < arr.length; i++) {
        // נפתח לולאה מקוננת
        // ונמצא את הערך הקטן ביותר בחלק שעדיין לא מוין
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      //נחליף את הערך הקטן עם האלמנט הראשון בחלק שעדיין לא מוין
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    // נחזיר את המערך הממוין
    return arr;
  };
  
  let arr = [2, 5, 7, 9, 4, 6, 3, 4, 4, 6, 8, 1, 0];
  const sortedArr = selectionSort(arr);
  console.log(...sortedArr);  // 0 1 2 3 4 4 4 5 6 6 7 8 9
  