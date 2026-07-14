const express = require('express');
const Student = require('../models/Student');
const StudentController = require('../controllers/StudentController')
const route = express.Router();

route.get('/students', (req, res) => {
    StudentController.getStudents(req, res);
})

route.get('/student/:rollNo', (req, res) => {
    StudentController.getStudentByRollno(req, res);
})

route.post('/add/student', (req, res) => {
    StudentController.addStudent(req, res);
})

route.put('/edit/student/:rollNo', (req, res) => {
    StudentController.editStudent(req, res);
})

route.delete('/delete/student/:rollNo', (req, res) => {
StudentController.deleteStudent(req, res);
})

module.exports = route