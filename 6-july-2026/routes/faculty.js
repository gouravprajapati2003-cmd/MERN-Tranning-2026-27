const express = require('express');
const faculties = require('../faculty.json')
const fs = require('fs');
const router = express.Router()

// /faculties ,get, http://localhost:3000/faculties
router.get('/faculties', (req, res) => {
    res.json(faculties)
})

// /faculty/:id, get,  http://localhost:3000/faculty/2
router.get('/faculty/:id', (req, res) => {
    let id = req.params.id;
    let faculty = faculties.find((faculty) => faculty.facultyId == id)
    res.json(faculty)
})

// /add/faculty, post -> postman,  http://localhost:3000/add/faculty
router.post('/add/faculty', (req, res) => {
    console.log(req.body);
    faculties.push(req.body)
    fs.writeFile('faculty.json', JSON.stringify(faculties), (err) => {
        if (err) {
            console.log("Problem in written file...")
        } else {
            res.end("Data has been added successfully...")
        }
    })
})

// /edit/faculty/:id put -> postman,  http://localhost:3000/edit/faculty/6
router.put('/edit/faculty/:id', (req, res) => {
    let id = req.params.id;
    let index = faculties.findIndex((faculty) => faculty.facultyId == id)
    faculties[index].Salary = 20000;
    fs.writeFile('faculty.json', JSON.stringify(faculties), (err) => {
        if (err) {
            console.log("Error in Updating the file...")
        } else {
            res.end("Data Has been updated successfully...")
        }
    })
})

// /delete/faculty/:id, delete -> postman, http://localhost:3000/delete/faculty/6
 router.delete('/delete/faculty/:id', (req, res) => {
    let id = req.params.id;
    console.log(id)
    let index = faculties.findIndex((faculty) => faculty.facultyId == id)
    console.log(index);
    faculties.splice(index, 1)
    fs.writeFile('faculty.json', JSON.stringify(faculties), (err) => {
         if(err) {
            console.log("Error in deleting the file...")
        } else {
            res.end("Data has been deleted successfully...")
        }
    })
 })

module.exports = router;