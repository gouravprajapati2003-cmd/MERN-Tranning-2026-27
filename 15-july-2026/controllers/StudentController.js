const Student = require('../models/Student');

const getStudents = async (req, res) => {
    try {
        let students = await Student.find({});
        res.render('studentList', {
            students: students
        })
    } catch (error) {
        console.log(error);
    }
}

const addStudent = async (req, res) => {
    try {
        console.log(req.body);
        let student = new Student(req.body);
        await student.save();
        res.render('addStudentSuccess');
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    addStudent,
    getStudents,
}