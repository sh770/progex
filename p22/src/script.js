let Data_Base;


let json = fetch('../data_base.json')
    .then(r => r.json())
    .then(data => {
        Data_Base = data;
    });

let showUser = () => {
    alert("username: " + Data_Base.test_user.username + "\n password: " + Data_Base.test_user.password);
}


function redirect(link) {
    window.location.assign(link);
}

function morph() {
    if (location.pathname == "/p22/src/index.html") {
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
        sessionStorage.setItem("isLogin", true);
        sessionStorage.setItem("username", Data_Base.test_user.username);
        redirect('index.html');
    } else {
        alert("שם או סיסמה שגויים");
        sessionStorage.setItem("isLogin", false);
    }
}


morph();




function del() {
    sessionStorage.clear()
    redirect('index.html')
}

// function btb1() {
//     if (sessionStorage.getItem("isLogin") == "false") {
//         document.getElementById("logout").style.display = "none";
//     }
//     }

// function btb2() {
//     if (sessionStorage.getItem("isLogin") == "true") {
//         document.getElementById("log").style.display = "none";
//     }
//     }

//     btb1();
//     btb2();