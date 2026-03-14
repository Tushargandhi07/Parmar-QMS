const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Course = require('./course');

const subjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    course_id:{
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    created_at:{
        type: Date,
        default: Date.now
    }
});

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;  