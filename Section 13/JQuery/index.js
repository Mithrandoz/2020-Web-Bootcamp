$("input").click(function() {
    $("h1").css("color", "red");
    $("h1").html("<em>Heyo</em>");
});



$("button").click(function(){
    $("h1").css("color", "purple");
});

$(document).keypress(function(event) {
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "navy");
    $("h1").text("Hello");
});

$("button.fade").on("click", function(){
    $("h1").fadeToggle();
});

$("button.slide").on("click", function () {
    $("h1").slideToggle();
});

$("button.animate-fade").on("click", function () {
    $("h1").animate({opacity: 0.5});
});

$("button.animate-fade-back").on("click", function () {
    $("h1").animate({
        opacity: 1
    });
});

$("button.blink").on("click", function () {
    $("h1").slideUp().slideDown().animate({
        opacity: 0.5
    }).animate({
        opacity: 1
    });
});