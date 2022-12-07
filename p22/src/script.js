let Data_Base;
            // const username1 = loginForm.username.value;
            // const password1 = loginForm.password.value;

let json = fetch('../data_base.json')
            .then(r => r.json())
            .then(data => {
                Data_Base = data;
            });





let showUser = () =>{
    alert("username: " + Data_Base.test_user.username + " password: " + Data_Base.test_user.password);
}


function redirect(link) {
    location.assign(link);
}









// function showUser (){
//     alert("username: " + Data_Base.test_user.username + " password: " + Data_Base.test_user.password);
//     // alert("username: " + loginForm.username.value + " password: " + loginForm.password.value);
// }




function login(){
     if (Data_Base.test_user.username == username && Data_Base.test_user.password == password){
        alert('you not m22e');
        redirect('index.html')
     }else {
        alert('you not me');
    }

    
}


