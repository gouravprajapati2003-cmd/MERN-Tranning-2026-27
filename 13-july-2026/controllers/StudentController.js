const Student = require('../models/Student')

const getStudents = async (req, res) => {
    let student = await Student.find({});
    //  console.log(student);
    res.send(student);
}

const getStudentByRollno = async (req, res) => {
    try {
        let rollNo = req.params.rollNo;
        let student = await Student.findOne({ rollNo: rollNo });
        res.send(student);
    } catch (error) {
        console.log(error)
    }
}

const addStudent = async (req, res) => {
    try {
        console.log("Adding Student...")
        console.log(req.body)
        let student = new Student(req.body);
        await student.save();
        res.send("New Student has been added Successfully..")
    } catch (error) {
        console.log(error);
    }
}

const editStudent = async (req, res) => {
    try {
        let rollNo = req.params.rollNo;
        let student = await Student.findOne({rollNo: rollNo});
        if(student) {
            student.fatherName = "Shree Ramesh Chand Ji";
            await student.save();
            res.end("Student have been updated Successfully..")
        } else {
            res.end("Student Not Found...");
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteStudent = async (req, res) => {
    try {
        let rollNo = req.params.rollNo;
        let student = await Student.deleteOne({rollNo: rollNo});
        res.send(student);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addStudent,
    getStudents,
    getStudentByRollno,
    editStudent,
    deleteStudent
}