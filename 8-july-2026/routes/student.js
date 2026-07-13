const express = require('express')
const route = express.Router()
const StudentController = require('../controllers/StudentController')
const students = require('../student.json')


// get -> /students http://localhost:3000/students
route.get('/students', (req, res) => {
    StudentController.getStudents(req, res);
})

// get through by id, http://localhost:3000/student/3
route.get('/student/:rollNo', (req, res) => {
   StudentController.getStudentById(req, res);
})

// post method http://localhost:3000/add/student
route.post('/add/student', (req, res) => {
    StudentController.addStudent(req, res);
})

// put method http://localhost:3000/edit/student/31
route.put('/edit/student/:rollNo', (req, res) => {
    StudentController.editStudent(req, res);
})
// delete method http://localhost:3000/delete/student/31
route.delete('/delete/student/:rollNo', (req, res) => {
    StudentController.deleteStudent(req, res);
})

module.exports = route;