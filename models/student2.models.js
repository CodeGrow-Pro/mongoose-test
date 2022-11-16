const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    lane1: String,
    lane2: String,
    street: String,
    city: String,
    country: String,
    pincode: Number
});

const studentSchema1 = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    createdAt: Date,
    updatedAt: Date,
    course: mongoose.SchemaTypes.ObjectId,
    subjects: [String],
    address: addressSchema
});

module.exports = mongoose.model("Student2",studentSchema1);