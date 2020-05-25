const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.get("/calculator", function (req, res) {
    res.sendFile(__dirname + "/calculator.html");
});

app.post("/calculator", function(req, res){
    console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("Result is " + result);
});

app.post("/bmicalculator", function (req, res) {
    console.log(req.body);
    var w = Number(req.body.w);
    var h = Number(req.body.h);

    var bmi = w / h;
    res.send("Your BMI is " + bmi);
});

app.listen(3000, function(){
    console.log("Server running on Port 30K");
});