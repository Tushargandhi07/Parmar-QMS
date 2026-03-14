const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    created_at:{
        type: Date,
        default: Date.now
    }
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;  