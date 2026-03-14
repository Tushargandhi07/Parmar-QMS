const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Paper = require('./paper');
const User = require('./user');

const questionSchema = new Schema({
    paper_id: {
        type: Schema.Types.ObjectId,
        ref: 'Paper',
        required: true
    },
    question_text: {
        type: String,
        required: true
    },
    question_solution:{
        type: String,
        required: true
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    created_at:{
        type: Date,
        default: Date.now
    }
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;  