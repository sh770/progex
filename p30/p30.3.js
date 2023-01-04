function getObjectsByProperty(objects, propName, propValue) {
  return objects.filter(obj => obj[propName] >= propValue);
}

const inputArray = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Eve', age: 35}];
const outputArray = getObjectsByProperty(inputArray, 'age', 30);
console.log(outputArray);  // Output: [{name: 'Bob', age: 30}, {name: 'Eve', age: 35}]
