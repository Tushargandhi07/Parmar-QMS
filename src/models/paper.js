const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');
const Subject = require('./subject');

const paperSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    subject_id: {
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    created_by:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Paper = mongoose.model('Paper', paperSchema);
module.exports = Paper;  