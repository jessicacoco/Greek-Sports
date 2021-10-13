import React, { useState } from 'react';
import './SearchCard.css';
import { Form, Button, Radio } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


function SearchCard() {
    const [value, setValue] = useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const onFinish = (values) => {
        console.log('Success:',values);
    };

    return (
        <>
        <div className="search-card">
            <h4>I am looking for: </h4>
            <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} 
                initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off">
                <Form.Item label="" name="radio" rules={[{ required: true}]}>
                    <Radio.Group onChange={onChange} value={value} defaultValue={1}>
                        <Radio value={1}>Fraternities</Radio>
                        <Radio value={2}>Sororities</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
                        Search
                    </Button>
                </Form.Item>
            </Form>
        </div>
        </>
    )
};

export default SearchCard;