const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

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

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/cards', (req, res) => {
    res.render("card", {prompt : "Who is buried in Grant's tomb?", colors});
});

app.get('/sandbox', (req, res) => {
    res.render("sandbox", {names});
});

app.get('/hello', (req, res) => {
    res.render("hello");
});

app.post('/hello', (req, res) => {
    res.render("hello", {name : req.body.username});
});

app.listen(3000, () => {
    console.log("This application is running on localhost: 3000!");var now = new Date();
    // convert date to a string in UTC timezone format:
    console.log(now.toUTCString());
    // Output: Wed, 21 Jun 2017 09:13:01 GMT
});