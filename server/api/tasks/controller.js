/**
 * GET => api/task => getAllTasks
 * POST => api/task => createTask
 * PUT => api/task/:taskId => update task
 * DELETE => api/task/taskId => deleteTask
 * */

const TaskModel = require('./model');
const {handleError, respondWithResult} = require('../../handler');

const getAllTasks = async (req, res) => {
    try {
        const data = await TaskModel.find({}).exec();
        return respondWithResult(res, {data}, 200);
    } catch (err) {
        return handleError(res, err, 500);
    }
}

const createTask = async (req, res) => {
    try {
        const data = await TaskModel.create(req.body);
        return respondWithResult(res, {data}, 200);
    } catch (err) {
        return handleError(res, err, 500);
    }
}

const updateTask = async (req, res) => {
    try {
        const data = await TaskModel.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}).exec();
        return respondWithResult(res, {data}, 200);
    } catch (err) {
        return handleError(res, err, 500);
    }
}

const deleteTask = async (req, res) => {
    try {
        await TaskModel.findOneAndRemove({_id: req.params.taskId}).exec();
        return respondWithResult(res, {message: 'task has been delete'}, 200);
    } catch (err) {
        return handleError(res, err, 500);
    }
}

const filterTasks = async (req, res) => {
    try {
        const {name, startDate, endDate} = req.body;
        let query = {};
        if (name && startDate && endDate) {
            query = {
                $or: [
                    {name: {$regex: name, $options: 'i'}},
                    {startDate: {"$gte": new Date(startDate), "$lte": new Date(endDate)}}
                ]
            }
        } else if (startDate && endDate) {
            query = {
                $or: [
                    {startDate: {"$gte": new Date(startDate), "$lte": new Date(endDate)}}
                ]
            }
        } else if (name) {
            query = {
                $or: [
                    {name: {$regex: name, $options: 'i'}}
                ]
            }
        }
        const data = await TaskModel.find({...query}).exec();
        return respondWithResult(res, {data}, 200);
    } catch (err) {
        return handleError(res, err, 500);
    }
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    filterTasks
}