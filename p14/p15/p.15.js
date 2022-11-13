document.addEventListener("copy" ,function(){})

function co1(a) {
    document.getElementById("aa1").textContent = " העתקת את: " + document.getSelection();
}

// document.addEventListener("keydown" ,co2)

// function co2(e) {
//     let tttr = e.code.replace("Key", "");
//     document.getElementById("aa2").textContent = " הקלדת את התו: " + tttr;
// }
// זה יציג רק את התו שהוקלד בלי תוספות
document.addEventListener("keydown" ,co3)

function co3(e) {
    let tttr2 = e.code.slice(-1);
    document.getElementById("aa2").textContent = " הקלדת את התו: " + tttr2;
}
