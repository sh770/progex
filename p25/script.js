let Data_Base;


let json = fetch('data_base.json')
    .then(r => r.json())
    .then(data => {
        Data_Base = data;
    });

console.log(data)

let showUser = () => {
    alert(88)
    alert("username: " + Data_Base.users.name + "\n password: " + Data_Base.users.password);
}


function redirect(link) {
    window.location.assign(link);
}
// function btb() {
//     if (sessionStorage.getItem("isLogin") == "true") {
//         document.getElementById("log").style.display = "none";
//     } else {
//         document.getElementById("logout").style.display = "none";
//     }
// }


function morph() {
    alert(888)

    if (location.pathname == "/p25/index.html") {

        if (sessionStorage.getItem("isLogin") == "true") {
            document.getElementById("user-name-h").textContent = `ברוך הבא ${sessionStorage.getItem("username")}`;
            document.getElementById("img-div").style.backgroundImage = "url('../static/prty.png')";
            document.getElementById("log").style.display = "none";
        } else {
            document.getElementById("logout").style.display = "none";
        }
    } else {
        console.log(localStorage.getItem("isLogin"));
        console.log(location.pathname);
    }

};

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // setTimeout(() => {}, 2000);
    if (username == Data_Base.test_user.username && password == Data_Base.test_user.password) {
        // alert(55)

        sessionStorage.setItem("isLogin", true);
        sessionStorage.setItem("username", Data_Base.test_user.username);
        redirect('index.html');
    } else {
        alert("שם או סיסמה שגויים");
        sessionStorage.setItem("isLogin", false);
    }

}






function del() {
    sessionStorage.clear()
    redirect('index.html')
}

morph();
btb();