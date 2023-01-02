$(document).ready(function() {

    $("#show").click(function() {
        $("#hw").before("<mark>hello </mark>");
    });


        $("#add").click(function() {
            $("ul").append(`<li id="new-item">new item</li>`);
        });


    $("#del").click(function() {
        $("li").remove();
    });
});