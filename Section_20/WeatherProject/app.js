const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const { dirname } = require("path");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
    const query = req.body.cityName
    const apiKey = "31d1383e09cf9cac25b0604db8ab3228"
    const units = "imperial"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units

    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const weatherIcon = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png";
            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write("<h1>The tempurature in " + query + " is " + temp + " degrees Ferenheight</h1>");
            res.write("<img src=" + weatherIcon + ">");
            res.send();
        });
    });

})

 
app.listen(3000, function(){
    console.log("server is running on port 30K")
});