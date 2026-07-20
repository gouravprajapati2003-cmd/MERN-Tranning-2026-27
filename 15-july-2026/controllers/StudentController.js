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

const editStudent = async (req, res) => {
    try {
        let rollNo = req.params.rollNo;

        let student = await Student.findOne({ rollNo: rollNo });

        res.render('editStudent', {
            student: student
        });

    } catch (error) {
        console.log(error);
    }
}

const updateStudent = async (req, res) => {
    try {

        let rollNo = req.params.rollNo;

        await Student.findOneAndUpdate(
            { rollNo: rollNo },
            req.body
        );

        res.redirect('/students');

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addStudent,
    getStudents,
    editStudent,
    updateStudent
}
