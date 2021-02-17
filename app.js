const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/cards', (req, res) => {
    res.render("card", {prompt : "Who is buried in Grant's tomb?", hint : "Think about whose tomb it is."});
});

app.listen(3000, () => {
    console.log("This application is running on localhost: 3000!");var now = new Date();
    // convert date to a string in UTC timezone format:
    console.log(now.toUTCString());
    // Output: Wed, 21 Jun 2017 09:13:01 GMT
});