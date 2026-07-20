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

module.exports = route;