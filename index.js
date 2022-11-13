const mongoose = require('mongoose');
const Student = require('./models/student.models');

/**
 * Connect to mongoDb
 */
mongoose.connect("mongodb://localhost/demodb", () => {
    console.log("Connected to demodb")
    dbOperations();
}, err => {
    console.log("Error: ", err.message)
})

/**
 * Create new collection with schema
 */
function dbOperations() {
    const student = new Student({
        name: "Vishwa",
        age: 99
    });
    console.log(student);
}
