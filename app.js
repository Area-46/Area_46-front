const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const res = require("express/lib/response");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.json({ limit: '20mb' }));
const TABLE = [];

app.get('/', (req, res) => {
    res.render('table', {
        TABLE: TABLE
    });
});

app.get('/home', function(req, res) {
    res.render('index');
});


app.get('/order', function(req, res) {
    res.render('order');
});

app.get('/menu', function(req, res) {
    res.render('menu');
});

app.get('/kitchen-login', function(req, res) {
    res.render('login_kitchen');
});

app.get('/kitchen-order', function(req, res) {
    res.render('order_kitchen');
});

app.get('/kitchen-status', function(req, res) {
    res.render('kitchen_status');
});

app.post('/addMenu', (req, res) => {
    console.log("\nI got request!!");

    TITLE = req.body.title;
    PRICE = req.body.price;
    IMG = req.body.imageSrc;
    data = [TITLE, PRICE, IMG];

    posts.push(data);
    console.log(posts);
});


app.listen(8080, function() {
    console.log("Server started on port 8080");
});