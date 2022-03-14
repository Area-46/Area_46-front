const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const res = require("express/lib/response");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.json({ limit: '20mb' }));


app.get('/home', function(req, res) {
    res.render('index');
});




app.listen(3000, function() {
    console.log("Server started on port 3000");
});