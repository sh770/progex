let json = fetch("../data_base.json")
.then(response => response.json())
.then(data => console.log(data));

// console.log(json)
// const txt = data
// const obj = JSON.parse(json)
// document.getElementById("demo").innerHTML = obj.test_user[username[1]];

// document.getElementById("demo").innerHTML = 55;
// Object Object.username[1] + ", " + Object.password[1]

// const myObj = {name:"John", age:30, city:"New York"};
// const myObj1 = data;
// document.getElementById("demo").innerHTML = myObj.name;
// document.getElementById("demo").innerHTML = myObj1.test_user;
// const text = '[ "Ford", "BMW", "Audi", "Fiat" ]';
// const myArr = JSON.parse(text);
// document.getElementById("demo").innerHTML = myArr[0];

// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);
// document.getElementById("demo").innerHTML = Object.testuser[0];

console.log(json)
