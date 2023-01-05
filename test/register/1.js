const fs = require("fs")

let data;

async function get_users8() {
    // const response = await fetch("database.json");
    // const data = await response.json();
    data = JSON.parse(fs.readFileSync("database.json"));
    // console.log(data);
    // userName = document.getElementById("username").value;
    // passWord = document.getElementById("password").value;

    for (let key in data.users) {
        // console.log(data[key].name); 
        console.log(data.users[key].name); 
        console.log(data.users[key].password); 
        // if ((userName == data[key].name) && (passWord == data[key].password)) {
            // console.log(userName + "\n" + passWord)
            // return true
        // }

    }
    return false
};
get_users8()
    // console.log(data);

    let userName = "Bo5b";

function reg_user(){
    // userName = document.getElementById("username").value;
    // passWord = document.getElementById("password").value;
    let checkIfExist = data.users.filter((newUser) => newUser.name == userName);
    // console.log(checkIfExist[0].name);
    try{
        (checkIfExist[0].name == undefined)
         console.log("name exist");
        //   throw("name exist");
        }
        catch(e){
            console.log("new name");
        }
        
    }
// }
// };

reg_user()
// console.log(data.users[key].name); 
