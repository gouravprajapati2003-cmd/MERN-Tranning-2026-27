const express = require('express');
const connect = require('./connection');
const student = require('./routes/studentRoute');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(student);

connect();

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is Running on Port 3000");
    }
});