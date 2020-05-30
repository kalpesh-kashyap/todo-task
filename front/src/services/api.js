import axios from 'axios';

const {REACT_APP_API} = process.env;

export const getTasksList = () => {
    return axios.get(`${REACT_APP_API}/task`);
}

export const saveTask = task => {
    return axios.post(`${REACT_APP_API}/task`, {...task});
}

export const updateTask = (task, taskId) => {
    return axios.put(`${REACT_APP_API}/task/${taskId}`, {...task});
}

export const deleteTask = id => {
    return axios.put(`${REACT_APP_API}/task/${id}`);
}

export const filterData = searchData => {
    return axios.post(`${REACT_APP_API}/task/filter`, {...searchData});
}