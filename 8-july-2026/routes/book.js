const express = require('express')
const route = express.Router()
const fs = require('fs');
const books = require('../book.json')

// http://localhost:3000/books
route.get('/books', (req, res) => {
    res.json(books);
})

// http://localhost:3000/book/2
route.get('/book/:id', (req,res) => {
    let id = req.params.id;
    let book = books.find((book) => book.bookId == id);
    res.json(book);
})

// http://localhost:3000/add/book
route.post('/add/book', (req, res) => {
    books.push(req.body);
    fs.writeFile('book.json', JSON.stringify(books), (err) => {
        if (err) {
            console.log("Book not added...")
        } else {
            res.end("Book added Successfully...");
        }
    })
})
module.exports = route;