const mongoose = require('mongoose');
const Student = require('./models/student4.model');

mongoose.connect('mongodb://localhost/demodb2', {family: 4}, (err) => {
    if(err){
        console.log('Error occurred');
    }
    else {
        console.log('connected');
        findById();
    }
});

async function displayOutput(){
    const student = await Student.create({
        name: 'Pranit',
        age: 95,
        email: 'Pranit@google.com',
        subjects: ['DS', 'Algo'],
        address: {
            city: 'Bengaluru'
        }
    });
    console.log(student);
}

async function findById(){
    try {
        const student = await Student.where("age").gt(90).where("name").equals('Pranit').limit(1);
        console.log(student)
        
    } catch (error) {
        console.log(error.message);
    }
}