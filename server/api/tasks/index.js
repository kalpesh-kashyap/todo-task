const express = require('express');
const {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    filterTasks
} = require('./controller');

const route = express.Router();

route.get('/', getAllTasks);
route.post('/', createTask);
route.put('/:taskId', updateTask);
route.delete('/:taskId', deleteTask);
route.post('/filter', filterTasks);

module.exports = route;