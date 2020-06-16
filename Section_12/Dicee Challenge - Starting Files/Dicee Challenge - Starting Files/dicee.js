function dice() {

var die1 = Math.floor(Math.random() * 6);
var die2 = Math.floor(Math.random() * 6);
console.log(die1, die2);
var dieImg = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var img1 = dieImg[die1];
var img2 = dieImg[die2];
document.querySelector('.img1').setAttribute("src", img1);
document.querySelector('.img2').setAttribute("src", img2);
if(die1 > die2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
    console.log(winner);
} else if(die1 < die2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
    console.log(winner);
} else if(die1 = die2) {
    document.querySelector("h1").innerHTML = "Draw!";
    console.log(winner);
}
}