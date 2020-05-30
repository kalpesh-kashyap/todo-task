import React, {useState} from 'react';
import {Button, DatePicker, Form, Input, message} from "antd";

const {RangePicker} = DatePicker;

const Filter = ({search, clearFilter}) => {
    const [form] = Form.useForm();
    const [searchFields, setSearchFields] = useState(null);

    const filterHandler = (data) => {
        if (!(data.name || data.dateRange)) {
            message.warning('please add filter values');
            return;
        }
        const obj = {
            name: data.name || null,
            startDate: data.dateRange ? data.dateRange[0]._d : null,
            endDate: data.dateRange ? data.dateRange[1]._d : null
        }
        search(obj);
        setSearchFields(obj)
    }

    const clearFilterHandler = () => {
        if (searchFields) {
            form.resetFields();
            setSearchFields(null);
            clearFilter()
        }
    }

    return (
        <Form
            form={form}
            name="invitationForm"
            className="invitation-form"
            onFinish={filterHandler}
        >
            <div className="form-group row">
                <div className="col-xs-12 col-md-4">
                    <Form.Item
                        name="name">
                        <Input placeholder="search task"/>
                    </Form.Item>
                </div>
                <div className="col-xs-12 col-md-4">
                    <Form.Item
                        name="dateRange">
                        <RangePicker
                            showTime={{format: 'HH:mm'}}
                            format="DD/MM/YYYY HH:mm"
                        />
                    </Form.Item>
                </div>
                <div className="col-xs-12 col-md-4">
                    <Form.Item className="">
                        <div className="d-flex flex-row justify-content-end">
                            <Button type="ghost" htmlType="submit"
                                    className="login-form-button mr-2">Filter</Button>
                            <Button type="default" onClick={clearFilterHandler}>Clear</Button>
                        </div>
                    </Form.Item>
                </div>
            </div>
        </Form>
    )
}

export {Filter}