var drum1 = new Audio("sounds/tom-1.mp3");
var drum2 = new Audio("sounds/tom-2.mp3");
var drum3 = new Audio("sounds/tom-3.mp3");
var drum4 = new Audio("sounds/tom-4.mp3");
var snare = new Audio("sounds/snare.mp3");
var kick = new Audio("sounds/kick-bass.mp3");
var crash = new Audio("sounds/crash.mp3");

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
       
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
};

document.addEventListener("keydown", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(key) {
    switch (key) {
        case "w":
            drum1.play();
            break;

        case "a":
            drum2.play();
            break;

        case "s":
            drum3.play();
            break;

        case "d":
            drum4.play();
            break;

        case "j":
            snare.play();
            break;

        case "k":
            crash.play();
            break;

        case "l":
            kick.play();
            break;

        default: console.log();

    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
};