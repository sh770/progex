function repeatString(str, num) {
  return str.repeat(num);
}

const inputString = "hello ";
const inputNumber = 5;
const outputString = repeatString(inputString, inputNumber);
console.log(outputString);  // Output: 'hellohellohello'
