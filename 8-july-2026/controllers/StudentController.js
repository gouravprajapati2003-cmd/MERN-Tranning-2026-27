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

}
module.exports = {
    getStudents,
    getStudentById,
    addStudent
}