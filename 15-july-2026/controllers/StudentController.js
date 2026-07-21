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
        // console.log(req.body);
        let student = new Student(req.body);
        await student.save();
        res.render('addStudentSuccess');
    } catch (err) {
        console.log(err);
    }
}

const getStudentForEdit = async (req, res) => {
    try {
        let id = req.params.id;
        let student = await Student.findOne({ _id: id });
       // console.log(student);
        res.render("editStudent", {
            student: student,
            errors: {},
            oldData: {}
        });
    } catch (error) {
        console.log(error);
    }
}

const editStudent = async (req, res) => {
    try {
        let id = req.params.id;
        //console.log(req.body);
        let student = await Student.findOne({ _id: id})
        student.rollNo = req.body.rollNo;
        student.studentName = req.body.studentName;
        student.fatherName = req.body.fatherName;
        student.aadharCardNo = req.body.aadharCardNo;
        student.mobileNo = req.body.mobileNo;
        await student.save();
        let students = await Student.find({})
        res.render('studentList', {
            students: students
        });
    } catch (error) {
        console.log(error);
    }
}

const deleteStudent = async (req, res) => {
    try {
        let id = req.params.id;
        await Student.deleteOne({ _id: id});
        let students = await Student.find({})
        res.render('studentList', {
            students: students
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addStudent,
    getStudents,
    getStudentForEdit,
    editStudent,
    deleteStudent
}
