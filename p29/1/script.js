$(document).ready(function(){

    $("#btn1").click(function(){
        $("#hw").html("<mark>hello shalom</mark>")
    });

    $("#btn2").click(function(){
        $("#hw").text($("#hw").attr("id"));
    });

    $("#btn3").click(function(){
        $("#hw").text($("#input").val());

    });
});