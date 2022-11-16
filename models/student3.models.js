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
    age: {
        type: Number,
        min: 16
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
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
            validator: s => s.length > 2,
            message: props => `${props.value} subject list is small`
        }
    },
    address: addressSchema
});

module.exports = mongoose.model("Student3",studentSchema1);