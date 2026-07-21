const express = require('express');
const route = express.Router();
const Student = require('../models/Student');
const StudentController = require('../controllers/StudentController');

route.get('/', (req, res) => {
    res.render('home');
})

route.get('/students', (req, res) => {
    StudentController.getStudents(req, res);
})

route.post('/add/student', (req, res) => {
    StudentController.addStudent(req, res);
})

route.get('/student/edit/page/:id', (req, res) => {
    StudentController.getStudentForEdit(req, res);
});

route.post('/edit/student/:id', (req, res) => {
    StudentController.editStudent(req, res);
});

route.get('/student/delete/:id', (req, res) => {
    StudentController.deleteStudent(req, res);
})

module.exports = route;