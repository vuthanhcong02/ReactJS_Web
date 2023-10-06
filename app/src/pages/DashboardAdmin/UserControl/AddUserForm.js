import React from 'react';
import { Select, Form, Input , Button} from 'antd';
import UserApi from '../../../api/apiUser';
const AddUserForm = ({handleClose,updateData}) => {
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        console.log('Success:', values);
        await UserApi.add(values);
        updateData();
        form.resetFields();
        handleClose();
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
            {
              min: 3,
              max: 10,
              message: 'Length should be 3 to 10',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
            {
                type: 'email',
            }
          ]}
        >
          <Input type="email"/>
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              min: 3,
              max: 10,
              message: 'Length should be 3 to 10',
            }
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label="Role"
            name="role"
            rules={[
              {
                required: true,
                message: 'Please select your role!',
              }
            ]}
        >
            <Select>
              <Select.Option value="student">Student</Select.Option>
              <Select.Option value="teacher">Teacher</Select.Option>
            </Select>
        </Form.Item>
        <div className="d-flex justify-content-end"><Button type="primary" htmlType="submit" >Add</Button></div>
      </Form>
    )
};
export default AddUserForm;