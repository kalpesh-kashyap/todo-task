import React, {useEffect, useState} from 'react';
import {Table, Tag, Space, Button, message, Popconfirm} from "antd";
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import {getTasksList, deleteTask, filterData} from "../../services/api";
import {findIndex} from 'lodash';
import moment from 'moment';

import {CreateTask} from "./CreateTask";
import {Filter} from "../../Components/Filter";

const TasksList = props => {
    //table rows
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Start Date',
            dataIndex: 'startDate',
            key: 'startDate',
            render: startDate => moment(new Date(startDate)).format('DD/MM/YYYY HH:mm')
        },
        {
            title: 'End Date',
            dataIndex: 'endDate',
            key: 'endDate',
            render: endDate => moment(new Date(endDate)).format('DD/MM/YYYY HH:mm')
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="link" onClick={() => editTaskHandler(record)} icon={<EditOutlined/>}/>
                    <Popconfirm title="Sure to delete?" onConfirm={() => deleteTaskHandler(record._id)}>
                        <Button type="link" icon={<DeleteOutlined/>}/>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    const [loader, setLoader] = useState(false);
    const [modalState, setModalState] = useState(false);
    const [formData, setFormData] = useState([]);
    const [taskList, setTasksList] = useState([]);

    useEffect(() => {
        getTasks();
    }, [])

    const modalToggleHandler = (state, data) => {
        setModalState(state)
        if (data) {
            const lists = [...taskList];
            const index = findIndex(lists, {_id: data._id});
            if (index >= 0) {
                lists[index] = data;
                setTasksList(lists);
            } else {
                lists.push(data);
                setTasksList(lists);
            }
        }
    }

    const editTaskHandler = (data) => {
        data.dateTime = [moment(data.startDate), moment(data.endDate)];
        delete data.startDate;
        delete data.endDate;
        const from = Object.keys(data).map((key) => {
            return {
                name: key,
                value: data[key]
            }
        });
        setFormData(from)
        setModalState(true)
    }

    const deleteTaskHandler = async (id) => {
        try {
            await deleteTask(id);
            const list = [...taskList];
            const index = findIndex(list, {_id: id});
            if (index >= 0) {
                list.splice(index, 1);
                setTasksList(list)
            }
            message.success('Task deleted successfully');
        } catch (err) {
            message.error(err.message)
        }
    }

    const getTasks = async () => {
        try {
            setLoader(true);
            const {data: {data}} = await getTasksList();
            setTasksList(data);
            setLoader(false);
        } catch (err) {
            message.error(err.message);
            setLoader(false);
        }
    }

    const filterHandler = async (searchObj) => {
        try {
            setLoader(true);
            const {data: {data}} = await filterData(searchObj);
            setTasksList(data);
            setLoader(false);
        } catch (err) {
            message.error(err.message);
            setLoader(false);
        }
    }

    const clearFilterHandler = async () => {
        await getTasks()
    }

    return (
        <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="card-title">Tasks List</h4>
                            </div>
                            <div className="col-md-6 text-right">
                                <Button type="primary" onClick={() => modalToggleHandler(true)}
                                        className="pull-right">Create Task</Button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <Filter clearFilter={clearFilterHandler} search={filterHandler}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <Table className="table table-striped"
                                       bordered={true}
                                       loading={loader}
                                       columns={columns}
                                       dataSource={taskList}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {modalState && <CreateTask modal={modalState}
                                       formData={formData}
                                       modalToggle={modalToggleHandler}/>}
        </div>
    );
};

export {TasksList};