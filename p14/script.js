// הצג ברוך הבא
function fil() {
    document.getElementById("h1").innerHTML = "ברוך הבא";
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