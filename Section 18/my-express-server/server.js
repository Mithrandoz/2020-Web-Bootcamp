const express = require("express");
const app = express();
app.get("/", function(req, res){
    console.log(req);
    res.send("<h1>Hello</h1>");
});
app.get("/contact", function(req, res){
    res.send("Contact Info");
});
app.get("/about", function (req, res) {
    res.send("About me");
});
app.get("/hobbies", function (req, res) {
    res.send("leather");
});
app.listen(3000, function(){
    console.log("Server started on port 3000")
});