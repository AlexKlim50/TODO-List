const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    status: {
        type: String,
    },
    _isDeleted: {
        type: Boolean,
    },
    _createdAt: {
        type: Number,
        required: true,
    },
    _deletedAt: {
        type: Number,
    },

});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;