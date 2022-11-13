document.addEventListener("copy" ,function(){})

function co1(a) {
    document.getElementById("aa1").textContent = " העתקת את: " + document.getSelection();
}

document.addEventListener("keydown" ,co2)

function co2(e) {
    let tttr = e.code.replace("Key", "");
    document.getElementById("aa2").textContent = " הקלדת את התו: " + tttr;
}