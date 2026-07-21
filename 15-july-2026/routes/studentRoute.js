const express = require('express');
const route = express.Router();
const Student = require('../models/Student');
const StudentController = require('../controllers/StudentController');
const studentValidation = require("../validation/StudentValidation");
const validationMiddleware = require("../middleware/ValidationMiddleware");

route.get('/', (req, res) => {
    res.render('welcome');
})

route.get("/add/student", (req, res) => {
    res.render("home", {
        errors: {},
        oldData: {}
    });
});

route.get('/students', (req, res) => {
    StudentController.getStudents(req, res);
})

// route.post('/add/student', (req, res) => {
//     StudentController.addStudent(req, res);
// })

//route.post("/add/student",studentValidation, StudentController.addStudent);     // without using middleware file

route.post(
    "/add/student",           // with using middleware file
    studentValidation,
    validationMiddleware("home"),
    StudentController.addStudent
);

route.get('/student/edit/page/:id', (req, res) => {
    StudentController.getStudentForEdit(req, res);
});

// route.post('/edit/student/:id', (req, res) => {
//     StudentController.editStudent(req, res);
// });

route.post(
    "/edit/student/:id",
    studentValidation,                    // with using middleware file   
    validationMiddleware("editStudent"),
    StudentController.editStudent
);

route.get('/student/delete/:id', (req, res) => {
    StudentController.deleteStudent(req, res);
})

module.exports = route;