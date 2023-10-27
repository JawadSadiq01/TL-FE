import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
  Select,
} from 'antd';
import useCustomHook from "./actionHandler";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const App: React.FC = () => {
  const [form] = Form.useForm();
  const { createDriver } = useCustomHook();

  const onFinish = (values: any) => {
    // delete values.confirm;
    const data = {
      "fields": {
        "name": {
          "stringValue": "Jawad Sadiq"
        },
        "passengers": {
          "integerValue": 5
        }
      }
    }

    createDriver(data);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{}}
      style={{ maxWidth: 800 }}
      scrollToFirstError
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: 'Please input your name!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: 'Please select gender!' }]}
      >
        <Select placeholder="Select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="vehicleNo"
        label="Vehicle No."
        rules={[{ required: true, message: 'Please input vehicle number!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="passengers"
        label="No. Of Seats/Passengers"
        rules={[{ required: true, message: 'Please select total available seats!' }]}
      >
        <Select placeholder="Select a number">
          <Option value={5}>5</Option>
          <Option value={7}>7</Option>
          <Option value={8}>8</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="hasChildSeat"
        label="Baby Car Seat"
      >
        <Select placeholder="Do you have child seat(s)?">
          <Option value={true}>Yes</Option>
          <Option value={false}>No</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;