const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.render('home');
})

route.post('/add/student', (req, res) => {
    
})

module.exports = route;