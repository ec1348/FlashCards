const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
    ];

const names = [
    {first: "ERIC", last: "CHEN"},
    {first: "JACK", last: "LEE"},
    {first: "DANIAL", last: "WANG"},
    {first: "JOHNSON", last: "LIN"},
    {first: "PETER", last: "CHEN"}
    ];

app.set('view engine', 'pug');


app.use((req, res, next) =>{
    req.message = "This message made it.";
    next();
});

app.use( (req, res, next) =>{
    console.log(req.message);
    next();
});


app.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name){
        res.render("index", {name});
    }else{
        res.redirect("/hello");
    }
});

app.get('/cards', (req, res) => {
    res.render("card", {prompt : "Who is buried in Grant's tomb?", colors});
});

app.get('/sandbox', (req, res) => {
    res.render("sandbox", {names});
});

app.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if(name){
        res.redirect("/");
    }else{
        res.render("hello",);
    }
});

app.post('/hello', (req, res) => {
    res.cookie("username", req.body.username);
    res.redirect("/");
});

app.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect("/hello");
});

app.listen(3000, () => {
    console.log("This application is running on localhost: 3000!");var now = new Date();
    // convert date to a string in UTC timezone format:
    console.log(now.toUTCString());
    // Output: Wed, 21 Jun 2017 09:13:01 GMT
});