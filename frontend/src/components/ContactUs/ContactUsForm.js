import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './ContactUsForm.css';

function ContactUsForm() {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
          name="basic"
          labelCol={{ span: 8, }}
          wrapperCol={{ span: 16, }}
          initialValues={{ remember: true, }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Form.Item label="Name" name="name"
            rules={[{ required: true, message: 'Please input your name!',},]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email"
            rules={[{ required: true, message: 'Please input your email!',},]}>
            <Input />
          </Form.Item>
          <Form.Item label="Message" name="message"
            rules={[{ required: true, message: 'Please input a message!',},]}>
            <Input.TextArea allowClear showCount autoSize={{ minRows: 2, maxRows: 6 }}/>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
    );
};

export default ContactUsForm;