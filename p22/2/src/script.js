let Data_Base;


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


checkLocal();


function checkLocal(){
    if(localStorage["user"]){
        document.querySelector("#id_h1").innerHTML = `
        היי ${localStorage["user"]}<br>
        ברוך הבא
        <br>לאתר שלי
        `
        }
        else {
            document.querySelector("#id_h1").innerHTML = `
              היי אורח<br>
        ברוך הבא
        <br>לאתר שלי
        `
          }
    }

    function clir(){
        let save_btn2 = document.querySelector("#save_btn2");
        
        save_btn2.addEventListener("click", function(){
        //    let input_val = ""; 
        //    input_val = document.getElementById("input_val").value;
        //    myc();
           localStorage.clear();
           checkLocal();
        
    })
    }






// function showUser (){
//     alert("username: " + Data_Base.test_user.username + " password: " + Data_Base.test_user.password);
//     // alert("username: " + loginForm.username.value + " password: " + loginForm.password.value);
// }




// function login(){
//      if (Data_Base.test_user.username == username && Data_Base.test_user.password == password){
//         alert('you not m22e');
//         redirect('index.html')
//      }else {
//         alert('you not me');
//     }

    
// }


