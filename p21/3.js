const insertionSort = (arr) => {
  // לולאת פור על המערך
  for (let i = 0; i < arr.length; i++) {
    // שמור את האלמנט הנוכחי להוספה
    const current = arr[i];
    // מצא את המיקום הנכון עבור האלמנט הנוכחי בחלק הממוין של המערך
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    // הכנס את האלמנט הנוכחי למיקום הנכון
    arr[j + 1] = current;
  }
  // נחזיר את המערך הממוין
  return arr;
};

let arr = [2, 5, 7, 9, 4, 6, 3, 4, 4, 6, 8, 1, 0];
const sortedArr = insertionSort(arr);
console.log(...sortedArr);  // 1, 2, 5, 8, 9]0 1 2 3 4 4 4 5 6 6 7 8 9
