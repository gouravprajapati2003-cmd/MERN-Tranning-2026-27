const express = require('express');
const fs = require('fs')
const app = express();
app.use(express.json())
const user = require('./routes/user')
const faculty = require('./routes/faculty')
app.use(faculty);
app.use(user);
app.listen(3000, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Server is running on 3000")
    }
})