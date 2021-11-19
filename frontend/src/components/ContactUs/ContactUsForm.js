import React from 'react';
import { Form, Input, Button, message } from 'antd';
import './ContactUsForm.css';

function ContactUsForm() {

    const onFinish = (values) => {
        console.log('Success:', values);
        message.success('Form submitted');
      };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
          name="basic"
          labelCol={{ span: 8, }}
          wrapperCol={{ span: 40, }}
          initialValues={{ remember: true, }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Form.Item name="name" 
            rules={[{ required: true, message: 'Please input your name!',},]}>
            <Input placeholder="Full Name"/>
          </Form.Item>
          <Form.Item name="email"
            rules={[{ required: true, message: 'Please input your email!',},]}>
            <Input placeholder="Email"/>
          </Form.Item>
          <Form.Item name="message"
            rules={[{ required: true, message: 'Please input a message!',},]}>
            <Input.TextArea placeholder="Message" allowClear showCount autoSize={{ minRows: 2, maxRows: 6 }}/>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24, }}>
            <Button id="contactUsbtn" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
    );
};

export default ContactUsForm;