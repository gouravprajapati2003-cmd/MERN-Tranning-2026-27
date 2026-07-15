const express = require('express');
const app = express()
const connect = require('./connection');
app.use(express.json())
const student = require('./routes/studentRoutes')
const mobile = require('./routes/mobileRoutes');
connect();
app.use(student);
app.use(mobile);
app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Server is Running on 3000...")
    }
})