const express = require('express');
const fs = require('fs')
const app = express();
app.use(express.json())
const student = require('./routes/student')
const book = require('./routes/book')
app.use(student);
app.use(book);
app.listen(3000, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Server is running on 3000")
    }
})