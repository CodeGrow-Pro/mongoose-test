const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    lane1: String,
    lane2: String,
    street: String,
    city: String,
    country: String,
    pincode: Number
})

const studentSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: {
        type: String,
        required: true,
        minLength: 15
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => {
            return Date.now();
        }
    },
    updatedAt: {
        type: Date,
        default: () => {
            return Date.now();
        }
    },
    course: mongoose.SchemaTypes.ObjectId,
    subjects: {
        type: [String],
        validate: {
            validator: (value) => value.length > 2,
            message: (props) => `${props.value} is invalid`
        }
    },
    address: addressSchema
});

const studentModel = mongoose.model('Student4',studentSchema);

module.exports = studentModel;