var color = ["red", "blue", "green", "yellow"];
var sequence = [];
var userSequence = [];
var level = "0";
var gameActive = false;
var gameOverSound = new Audio("sounds/wrong.mp3")
function colorSound(x) {
    var soundColor = new Audio("sounds/" + x + ".mp3");
    soundColor.play();
}

function nextSequence() {
    userSequence = [];
    level++;
    $("#level-title").text("Level " + level);
    var rN = Math.floor(Math.random() * 4);
    var randoColor = color[rN];
    sequence.push(randoColor);
    $("#" + randoColor).fadeToggle(100).fadeToggle(100);
    colorSound(randoColor);
};

function answerChecker(currentLevel) {
if (sequence[currentLevel] === userSequence[currentLevel]) {
    console.log("right");
    if (userSequence.length === sequence.length) {
        setTimeout(function () {
            nextSequence();
        }, 1000);
    }
} else {
    console.log("wrong");
    gameOverSound.play();
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over")
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    gameActive = false;
    level = "0";
    sequence = [];
}};

function pressed(y){
    $("#" + y).addClass("pressed");
    setTimeout(() => {
        $("#" + y).removeClass("pressed");
    }, 100);
}

$(".btn").click(function(){
    var userColor = $(this).attr("id");
    userSequence.push(userColor);
    colorSound(userColor);
    pressed(userColor);
    answerChecker(userSequence.length - 1);
});

$(document).keypress(function () {
    if (!gameActive) {
        $("#level-title").text("Level " + level);
        nextSequence();
        gameActive = true;
    }
});