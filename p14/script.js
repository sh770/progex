// הצג ברוך הבא
function fil() {
    
    let day = new Date().getDay()
    let day2;
switch(day){
    case 0:
        day2 = "ראשון"
        console.log("Sunday")
        break;
    case 1:
        day2 = "שני"
        console.log("Monday")
        break;
    case 2:
        day2 = "שלישי"
        console.log("Tuesday")
        break;
    case 3:
        day2 = "רביעי"
        console.log("Wednesday")
        break;
    case 4:
        day2 = "חמישי"
        console.log("Thursday")
        break;
    case 5:
        day2 = "שישי"
        console.log("Friday")
        break;
    case 6:
        day2 = "שבת"
        console.log("Saturday")
        break;   
}
document.getElementById("h1").innerHTML = `היום יום : ${day2}`;
}




function numpressd(){
         let x = document.getElementById("calculator_value").value;
        
         if ((x > 0) || (x < 0)) {
        let scalculator = document.getElementById("calculator_value");
        
        let cal = scalculator.value = scalculator.value - 1 + 11;
        document.getElementById("calculator").innerHTML = cal;
        calculator_value.value = '';
        

    } else {
        document.getElementById("calculator").innerHTML = "לא מספר תקין";
        //alert("לא מספר תקין")
        calculator_value.value = '';
    }

    }

    function reset(){
        document.getElementById("calculator").innerHTML = "";
        calculator_value.value = "";
        document.getElementById("h1").innerHTML = "";

    }