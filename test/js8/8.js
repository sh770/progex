

// if ((localStorage.getItem("counter")) || (typeof (counter) == "undefined"))
// {
//     console.log("88")
// }
// }else if(typeof (counter) == "undefined"){
//     console.log("770")

// }
// let counter = 0;

// if (typeof (counter) == "undefined") {
//     counter = localStorage.getItem("counter")
//     counter++
//     console.log(counter)

//  counter = 0;
// }

let counter =0;

function counterll(){
if (!localStorage.getItem("counter")) {

    localStorage.setItem("counter", 0);
    counter = localStorage.getItem("counter");
    console.log(counter + " no counter");

} else {
    counter = localStorage.getItem("counter");
    counter++

    localStorage.setItem("counter", counter)

    console.log(counter)
}
}
counterll()
console.log(counter + " all")

// counter++
// localStorage.setItem("counter", counter)
// console.log(counter)

// if (typeof (counter) == "undefined") {
//     let counter = 0;
//     localStorage.setItem("counter", counter)

//     console.log(counter + " a")
//     counter++
// } else {
//     console.log(5)
//     console.log(typeof (counter))
// }

// if(localStorage.getItem("counter")){
//     console.log("88")
// }else{
//     console.log("99")
// console.log(localStorage.getItem(counter + "88888"));
// console.log(counter + " b")

// }