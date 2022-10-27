function myfun1(x) {
    return (x * 53);
}
console.log(myfun1(2));

function myfun2(x,y) {
    return (x**y);
}
console.log(myfun2(2,3));

function myfun3() {
   let a = prompt("enter data a");
   let b = prompt("enter data b");
   let c = prompt("enter data c");
   let d = prompt("enter data d");
   let e = prompt("enter data e");
   alert(`${a}\n${b}\n${c}\n${d}\n${e}`);
}

myfun3();

function myfun4() {
    let fName = prompt("enter data first Name");
    let lName = prompt("enter data last Name");
    let age = prompt("enter data age");

    alert(`Your First Name is: ${fName}
    \nYour Last Name Is: ${lName}
    \nYou Are: ${age} years old`);
 }
 
 myfun4();
 
 function myfun5(x,y) {
    return (x+y);
 }

 function myfun6() {
    let num1 = prompt("first number")
    let num2 = prompt("second number")
    alert(myfun5(Number(num1),Number(num2)))
 }

 myfun6()