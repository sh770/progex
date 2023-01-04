function getLongStrings(strings) {
  return strings.filter(str => str.length >= 5);
}

const inputArray = ['apple', 'banana', 'grape', 'pear'];
const outputArray = getLongStrings(inputArray);
console.log(outputArray);  // Output: ['banana', 'grape']
