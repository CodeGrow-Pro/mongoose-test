const mongoose = require('mongoose');
const Student = require('./models/student.models');
const Student2 = require('./models/student2.models');
const Student3 = require('./models/student3.models');
const queries = require('./queries');

/**
 * Connect to mongoDb
 */
mongoose.connect('mongodb://localhost:27017/testdb', {family:4}, function(err){
    if(err){
        console.log(err);
    }
    else {
        console.log("Connected to testdb");
        queries.deleteOne();
    }
});

/**
 * Create new collection with schema
 */
function dbOperations() {
    const student = new Student({
        name: "Sardar",
        age: 99
    });
    console.log(student);
    student.save().then(() => {
        console.log("done");
    }); 
}

async function dbOperations2() {
    const student = await Student.create({
        name: "Manav",
        age: 98
    });
    console.log(student);
    // student.save().then(() => console.log("done"));
}

async function nestedSchema() {
    try {
        const student = await Student2.create({
            name: "Manav",
            age: 98,
            subjects: ["DS", "BE"]
        });
        console.log(student);
    } catch (error) {
        console.log(error.message);
    }
}

async function invalidSchema() {
    try {
        const student = await Student3.create({
            name: "Manav",
            age: 98,
            subjects: ["DS", "BE"],
            email: "manav@gmail.com"
        });
        console.log(student);
    } catch (error) {
        console.log(error.message);
    }
}