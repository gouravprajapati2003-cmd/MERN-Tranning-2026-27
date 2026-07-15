const mongoose = require('mongoose'); 

const connect = async () => {
    try {
       await mongoose.connect('mongodb://localhost:27017/mern2026frontend')
       console.log("Database Connected...") 
    } catch (error) {
       console.log(error) 
    }
}

module.exports = connect;