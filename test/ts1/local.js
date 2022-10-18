window.onload = function(){
    checkLocal();
    declareViewEvents();
    clir();
    }

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

    function declareViewEvents(){
    let save_btn = document.querySelector("#save_btn");
    save_btn.addEventListener("click", function(){
    let input_val = document.querySelector("#id_input").value;
    // alert(input_val)
    localStorage.setItem("user", input_val);
    checkLocal();
    })
}

function clir(){
    let save_btn2 = document.querySelector("#save_btn2");
    
    save_btn2.addEventListener("click", function(){
    //    let input_val = ""; 
    //    input_val = document.getElementById("input_val").value;
       myc();
       localStorage.clear();
       checkLocal();
    
})
}

// function clearall(){
//     scalculator = document.getElementById("calculator_value").value;
//     calculator_value.value = '0';
//     }

function myc(){
    "document.getElementById('id_input').value = ''"
}