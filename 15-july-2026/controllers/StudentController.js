const Student = require('../models/Student');

const addStudent = async (req, res) => {
    try {
        console.log(req.body);
        let student = new Student(req.body);
        await student.save();
        res.send("Student added Successfully...");
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    addStudent,
}