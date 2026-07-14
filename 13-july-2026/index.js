const express = require('express');
const app = express()
const connect = require('./connection');
app.use(express.json())
const student = require('./routes/studentRoutes')
connect();
app.use(student);
app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Server is Running on 3000...")
    }
})