
// $(document).ready(function() {
    $(".hw").mouseenter(function() {
        $(this).css("background-color", "green");
        // alert(1);

    },
        function () {
            // alert(2);
            $(this).css("background-color", "red")
        });
        // });




$(".db-click").dblclick(function () {
    $("h5").text('You clicked twice'); });

$("h5").hover(function () {
    $("h5").css("color", "green");
 }, function () {
     $("h5").css("color", "red"); })
     
     