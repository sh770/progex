


const ul = document.getElementById('authors');
const list = document.createDocumentFragment();
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let authors = data;

        authors.map(function (author) {
            let li = document.createElement('li');
            let name = document.createElement('h2');
            let email = document.createElement('span');

            name.innerHTML = `${author.name}`;
            email.innerHTML = `${author.email}`;

            li.appendChild(name);
            li.appendChild(email);
            list.appendChild(li);
        });
    }).
    // .catch(function (error) 
    // {
    //     console.log(error);
    // };

ul.appendChild(list);

const url1 = 'https://jsonplaceholder.typicode.com/users';

let data = {
    name: 'Sammy'
}

let request = new Request(url1, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8'
    })
});

fetch(request)
    .then(function () {
        // Handle response you get from the API
    });


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

//=====================
// function login() {

//     let json = fetch("../data_base.json")
//         .then(response => response.json())
//         .then(data => {
//             let userData = data;
//             for (let i in userData) {
//                 for (let j in userData[i]) {
//                     console.log(j);
//                 }

//             }
//         });
//         json = u
//     let usermane = document.getElementById("name").value;
//     let password = document.getElementById("password").value;


//     if (i == "username" && j == "password") {
//         alert(usermane + " - " + password);
//     }
//     else {
//         alert('you not me');
//     }
// }