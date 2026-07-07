const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.end('<h1>Hello This side node js server...')
})
app.get('/home', (req, res) => {
    res.end('<h1> This is home page')
})

app.listen(3000, (error) => {
    if(error) {
        console.log("Problem to start server...")
    } else {
        console.log("Server is running on port 3000....")
    }
})