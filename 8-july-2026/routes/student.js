const express = require('express')
const route = express.Router()
const fs = require('fs');
const students = require('../student.json')


// get -> /students http://localhost:3000/students
route.get('/students', (req, res) => {
    //res.json(students)
})

// get through by id, http://localhost:3000/student/3
route.get('/student/:rollNo', (req, res) => {
    // let rollNo = req.params.rollNo;
    // let student = students.find((student) => student.rollNo == rollNo)
    // res.json(student);
})

// post method http://localhost:3000/add/student
route.post('/add/student', (req, res) => {
    // console.log(req.body);
    // students.push(req.body);
    // fs.writeFile('student.json', JSON.stringify(students), (err) => {
    //     if (err) {
    //         console.log("Data not added...")
    //     } else {
    //         res.end("Data added Successfully...");
    //     }
    // })
})

// put method http://localhost:3000/edit/student/31
route.put('/edit/student/:rollNo', (req, res) => {
    let rollNo = req.params.rollNo
    let index = students.findIndex((student) => student.rollNo == rollNo);
    students[index].email = "vinodsharma231@gmail.com";
    fs.writeFile('student.json', JSON.stringify(students), (err) => {
        if (err) {
            console.log("Data not updated...")
        } else {
            res.end("Data updated Successfully...");
        }
    })
})
// delete method http://localhost:3000/delete/student/31
route.delete('/delete/student/:rollNo', (req, res) => {
    let rollNo = req.params.rollNo
    let index = students.findIndex((student) => student.rollNo == rollNo);
    students.splice(index, 1)
    fs.writeFile('student.json', JSON.stringify(students), (err) => {
        if (err) {
            console.log("Data not Deleted...")
        } else {
            res.end("Data Deleted Successfully...");
        }
    })
})

module.exports = route;