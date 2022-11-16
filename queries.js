const Student = require("./models/student.models");

async function findById(){
    try {
        const student = await Student.findById("6371b8a1318c72bff3039a3b");
        console.log(student)
    } catch (error) {
        console.log(error.message);
    }
}

async function findByName(){
    try {
        const student = await Student.find({name: 'Patel'});
        console.log(student)
    } catch (error) {
        console.log(error.message);
    }
}

async function findOneEntry(){
    try {
        const student = await Student.findOne({age: 99});
        console.log(student)
    } catch (error) {
        console.log(error.message);
    }
}

async function deleteOne(){
    try {
        const student = await Student.deleteOne({age: 99});
        console.log(student)
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    findById,
    findByName,
    findOneEntry,
    deleteOne
}