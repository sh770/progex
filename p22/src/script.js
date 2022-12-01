
// function print2(){
//     let json = fetch("../data_base.json")
//   .then(response => response.json())
//   .then(json => console.log(json))

//   console.log(json);
// }
// let json1 = fetch("../data_base.json")
//     .then(response => response.json())
//     .then(json => {
//         console.log(json)
//     })

// let json = fetch("../data_base.json")
//     .then(response => response.json())
//     .then(data => {
//         let userData = data;
//         for (let i in userData) {
//             for (let j in userData[i]) {
//                 console.log(j);
//             }

//         }
//     });

// console.log(json);


function login() {

    let json = fetch("../data_base.json")
        .then(response => response.json())
        .then(data => {
            let userData = data;
            for (let i in userData) {
                for (let j in userData[i]) {
                    console.log(j);
                }

            }
        });
        json = u
    let usermane = document.getElementById("name").value;
    let password = document.getElementById("password").value;


    if (i == "username" && j == "password") {
        alert(usermane + " - " + password);
    }
    else {
        alert('you not me');
    }
}