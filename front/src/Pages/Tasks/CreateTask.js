import React, {useState} from 'react';
import {Modal, Button, Form, Input, DatePicker, message} from "antd";
import {saveTask, updateTask} from "../../services/api";

const {RangePicker} = DatePicker;

const CreateTask = ({formData, modal, modalToggle}) => {
    const [loading, setLoader] = useState(false);

    const handleOk = () => {
        modalToggle(false)
    }

    const submitTaskHandler = async (task) => {
        try {
            setLoader(true);
            const obj = {
                ...task,
                startDate: task.dateTime[0]._d,
                endDate: task.dateTime[1]._d,
            }
            let taskRes;
            if (formData.length) {
                const taskId = formData.find(data => data.name === '_id');
                const {data: {data}} = await updateTask(obj, taskId.value);
                taskRes = data;
            } else {
                const {data: {data}} = await saveTask(obj);
                taskRes = data;
            }
            setLoader(false);
            message.success(`Task ${formData.length ? 'updated' : 'created'} successfully`);
            modalToggle(false, taskRes)
        } catch (err) {
            message.error(err.message);
            setLoader(false);
        }
    }

    return (
        <Modal
            title={formData.length ? 'Edit Task' : 'Add New Task'}
            visible={modal}
            onOk={handleOk}
            onCancel={handleOk}
            width={800}
            footer={[
                <Button key="back" onClick={handleOk}>
                    Cancel
                </Button>,
                <Button form='my-form' key="submit" type="primary" htmlType="submit" loading={loading}>
                    Submit
                </Button>,
            ]}
        >
            <Form id="my-form" className="forms-sample" fields={formData} onFinish={submitTaskHandler}>
                <div className="form-group">
                    <label htmlFor="name">Task Name<span className="text-danger">*</span></label>
                    <Form.Item
                        name="name"
                        rules={
                            [
                                {
                                    required: true,
                                    message: 'Please enter your task name',
                                },
                            ]}>
                        <Input className="form-control" placeholder="Task name"/>
                    </Form.Item>
                </div>
                <div className="form-group">
                    <label htmlFor="aboutUser">Description</label>
                    <Form.Item name="description">
                        <Input.TextArea className="form-control" id="aboutUser" rows="4"/>
                    </Form.Item>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Start Date - End Date<span className="text-danger">*</span></label>
                    <Form.Item
                        name="dateTime"
                        rules={
                            [
                                {
                                    required: true,
                                    message: 'Please select task\'s start datetime and end date time'
                                },
                            ]}>
                        <RangePicker
                            showTime={{format: 'HH:mm'}}
                            format="YYYY-MM-DD HH:mm"
                        />
                    </Form.Item>
                </div>
            </Form>
        </Modal>
    )
}

export {CreateTask};