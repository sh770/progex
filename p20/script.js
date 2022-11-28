function print(){
let json = fetch("employees.json")
.then(response => response.json())
.then(data => console.log(data));



console.log(json);
}


function print2(){
fetch("users.json")
  .then(response => response.json())
  .then(json => console.log(json))

  console.log(json);
}