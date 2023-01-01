$(document).ready(function () {

        $("#hw3").click(function() {
            $("#hw").animate({
                top: '+=250px',
                
            }, 1000, function() {
              $(this).animate({left: '+=500px'}, 1000).fadeOut(1000);
            });
          });
    });


    $(document).ready(function() {
        $("#div2").click(function() {
            $("#hw1").fadeToggle("fast");
        })});

        $(document).ready(function() {
            $("#hw2").click(function() {
                $(this).css("background-color", "#ff0000");
            })});