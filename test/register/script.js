let counter = 0;


function counterll() {
    if (!localStorage.getItem("counter")) {

        localStorage.setItem("counter", 0);
        counter = localStorage.getItem("counter");
        console.log(counter + " no counter");

    } else {
        counter = localStorage.getItem("counter");
        // counter++

        localStorage.setItem("counter", counter)

        console.log(counter)
    }
    if (counter >= 3) {
        document.getElementById("lbl2").textContent = "נגמרו לך הנסיונות"
        document.getElementById("lbl3").textContent = "תוכל לנסות שוב בעוד 3 דקות"
        resetCounter()
        console.log("5555")
    }
    localStorage.setItem("counter", counter)
}


let userName;
let passWord;

async function get_users8() {
    const response = await fetch("database.json");
    const data = await response.json();
    // console.log(data);
    userName = document.getElementById("username").value;
    passWord = document.getElementById("password").value;

    for (let key in data.users) {
        console.log(data.users[key].name); 
        if ((userName == data.users[key].name) && (passWord == data.users[key].password)) {
            console.log(userName + "\n" + passWord)
            return true
        }

    }
    return false
}
async function get_users() {
    document.getElementById("lbl").textContent = ""
    let a = await get_users8()
    if (a == true) {
        localStorage.setItem("username", userName);
        localStorage.setItem("password", passWord);
        document.getElementById("lbl").textContent = "אתה מחובר"
        localStorage.setItem("user", "login")
        window.location.assign("/../../website/src/index.html")
        // console.log(999);

    } else {
        document.getElementById("lbl").textContent = "שם או סיסמה שגויים"
        count();

        // alert("שם או סיסמה שגויים");
    }
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function count() {
    counter++
    // alert(0)
    if (counter == 1) {
        document.getElementById("lbl2").textContent = "  נותרו לך עוד 2 נסיונות "
    }
    else if (counter == 2) {
        document.getElementById("lbl2").textContent = "  נותר לך עוד נסיון אחד  "
    }
    else if (counter == 3) {
        document.getElementById("lbl2").textContent = "נגמרו לך הנסיונות"
        document.getElementById("lbl3").textContent = "תוכל לנסות שוב בעוד 3 דקות"
        resetCounter()
        console.log(5555)
    }
    localStorage.setItem("counter", counter)

}

const resetCounter = () => {
    document.getElementById("button").disabled = true;
    setTimeout(() => {
        counter = 0;
        document.getElementById("lbl").textContent = ""
        document.getElementById("lbl2").textContent = ""
        document.getElementById("lbl3").textContent = ""
        console.log(`Counter reset to ${counter}`);
        document.getElementById("button").disabled = false;
        localStorage.setItem("counter", 0)

    }, 30000)
}

counterll()
console.log(counter + " all")



