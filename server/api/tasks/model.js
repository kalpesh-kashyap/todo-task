const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    description: {type: String, trim: true},
    startDate: {type: Date},
    endDate: {type: Date}
})

const TaskModel = mongoose.model('tasks', TaskSchema);

module.exports = TaskModel;