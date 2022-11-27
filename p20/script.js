function print(){
let json = fetch("employees.json")
.then(response => response.json())
.then(data => console.log(data));



console.log(json);
}