const students = require('../student.json')

function getStudents(req, res) {
    try {
        res.json(students);
    } catch (err) {
        console.log(err);
    }
}

function getStudentById(req, res) {
    try {
        let rollNo = req.params.rollNo;
        let student = students.find((student) => student.rollNo == rollNo)
        res.json(student);
    } catch (err) {
        console.log(err);
    }
}

function addStudent(req, res) {
    try {
        console.log(req.body);
        students.push(req.body);
        fs.writeFile('student.json', JSON.stringify(students), (err) => {
            if (err) {
                console.log("Data not added...")
            } else {
                res.end("Data added Successfully...");
            }
        })
    } catch (err) {
        console.log(err);
    }
}

function editStudent(req, res) {
    try {
        let rollNo = req.params.rollNo
        let index = students.findIndex((student) => student.rollNo == rollNo);
        students[index].email = "vinodsharma231@gmail.com";
        fs.writeFile('student.json', JSON.stringify(students), (err) => {
            if (err) {
                console.log("Data not updated...")
            } else {
                res.end("Data updated Successfully...");
            }
        })
    } catch (err) {
        console.log(err);
    }
}

function deleteStudent(req, res) {
    try {
        let rollNo = req.params.rollNo
        let index = students.findIndex((student) => student.rollNo == rollNo);
        students.splice(index, 1)
        fs.writeFile('student.json', JSON.stringify(students), (err) => {
            if (err) {
                console.log("Data not Deleted...")
            } else {
                res.end("Data Deleted Successfully...");
            }
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    editStudent,
    deleteStudent
}