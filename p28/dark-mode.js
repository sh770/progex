// build a js script using JQuery to add a toggle botton that changes any page to dark-mode when pressed.
// try your "dark-mode.js" on index1.html, index2.html and index3.html without changing the html files!

// load jQuery linking 

let bscript = document.createElement("script");
bscript.setAttribute("src", "https://code.jquery.com/jquery-3.6.3.js" );
bscript.setAttribute("integrity", "sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=");
bscript.setAttribute("crossorigin", "anonymous");

document.head.appendChild(bscript);

let dscript = document.createElement("script");
dscript.setAttribute("src","dark-mode2.js");
dscript.setAttribute("defer", "");

document.head.appendChild(dscript);

// let bbtn = document.createElement("btn");
// bbtn.setAttribute(<button>New</button>);

// document.body.add(<button>New</button>);
// $(document).append('<button>New</button>'); 

// $("#btn").click(function(){
//     $("h1").hide()
// })
// $(document).ready(function () {


    // $("#btn").click(function(){
    //     // $("body").toggle().css("background-color", "red" ,"color", "white","display: false;")
    // })
// $("#btn").click(f).keypress(f);

// });

// let f = () => {
//     // $("#btn").toggle().css("background-color", "black").css("color", "white");
//     $("*").click().css("background-color", "black").css("color", "white");

// }

// load bootstrap req
// let blink = document.createElement("link")
// blink.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css")
// blink.setAttribute("rel", "stylesheet");
// blink.setAttribute("integrity", "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65")
// blink.setAttribute("crossorigin", "anonymous")

// document.head.appendChild(blink);




// {/* <script src="https://code.jquery.com/jquery-3.6.3.js" 
// integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM="
// crossorigin="anonymous">
// </script> */}

$(document).ready(function(){
    $("button").click(function(){
      $("*").css("background-color", "black").css("color", "white");
    });
  });