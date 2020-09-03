const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();

// item is logged as empty to prevent errors

const items = [];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Public"));



app.get("/", function (req, res) {
    
    const day = date.getDate();

    res.render("list", {listTitle: day, newItem: items});

});

app.post("/", function(req, res) {

    const item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work")
        console.log("work")
    } else {
        items.push(item);
        res.redirect("/");
        console.log("non work")
    }
    console.log(item)
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newItem: workItems})
})

app.post("/work", function(req, res){
    let item = req.body.newItem
    workItems.push(item);
    res.redirect("/work")
})

app.get("/about", function (req, res) {
    res.render("about")
})

app.listen(3000, function () {
    console.log("Server started on port 3000.");
});
