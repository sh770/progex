let Data_Base;


let json = fetch('data_base.json')
    .then(r => r.json())
    .then(data => {
        Data_Base = data;
    });

console.log(Data_Base)









function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == Data_Base.user.username && password == Data_Base.user.password) {
        document.getElementById("form").style.display = "none";
        document.getElementById("admin").style.display = "block";
        buildTable();

    } else {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        alert("שם או סיסמה שגויים");
    }

}