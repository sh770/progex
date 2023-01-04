function getEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

const inputArray = [1, 2, 3, 4, 5];
const outputArray = getEvenNumbers(inputArray);
console.log(outputArray);  // Output: [2, 4]

  