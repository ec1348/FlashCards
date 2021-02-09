const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("<h1>This is my first Express project.</h1>");
});

app.get('/hello', (req, res) => {
    res.send("<h1>Hello student, this is my first Express project.</h1>");
});

app.listen(3000, () => {
    console.log("This application is running on localhost: 3000!");var now = new Date();
    // convert date to a string in UTC timezone format:
    console.log(now.toUTCString());
    // Output: Wed, 21 Jun 2017 09:13:01 GMT
});