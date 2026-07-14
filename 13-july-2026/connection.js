const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/mern2026')
        console.log("Database Connected Successfully...");
    } catch (error) {
        console.log(error)
    }
} 
module.exports = connect;