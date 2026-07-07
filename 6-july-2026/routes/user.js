const express = require('express');
const users = require('../users.json')
const fs = require('fs');
const router = express.Router()
// localhost:3000/users
router.get('/users', (req, res) => {
    res.json(users)
})
// localhost:3000/user/10
router.get('/user/:id', (req, res) => {
    let id = req.params.id;
    let user = users.find((user) => user.id == id)
    res.json(user)
})
// http://localhost:3000/add/user
router.post('/add/user', (req, res) => {
    console.log(req.body)
    users.push(req.body)
    fs.writeFile('users.json', JSON.stringify(users), (err) => {
        if(err) {
            console.log("Problem in written file...")
        } else {
            res.end("Data has been added successfully...")
        }
    })
})
// http://localhost:3000/edit/user/31
router.put('/edit/user/:id', (req, res) => {
    let id = req.params.id;
    console.log(id)
    let index = users.findIndex((user) => user.id == id)
    console.log(index)
    users[index].email = "gkp8132@gmail.com";
    fs.writeFile('users.json', JSON.stringify(users), (err) => {
        if(err) {
            console.log("Error in Updating the file...")
        } else {
            res.end("Data Has been updated successfully...")
        }
    })
})
// http://localhost:3000/delete/user/31
router.delete('/delete/user/:id', (req, res) => {
    let id = req.params.id;
    console.log(id)
    let index = users.findIndex((user) => user.id == id)
    console.log(index);
    users.splice(index, 1);
    fs.writeFile('users.json', JSON.stringify(users), (err) => {
         if(err) {
            console.log("Error in deleting the file...")
        } else {
            res.end("Data has been deleted successfully...")
        }
    })
})

module.exports = router