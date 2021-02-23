const express = require('express');
const router = express.Router();

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
    ];
    
router.get('/', (req, res) => {
    res.render("card", {prompt : "Who is buried in Grant's tomb?", colors});
});

module.exports = router;