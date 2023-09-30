import React from 'react';
import { Button, Form, Input, Space } from 'antd';
import './AdminLogin.scss';
const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        },
      );
  }, [values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Login
    </Button>
  );
};
const AdminLogin = () => {
  const [form] = Form.useForm();
  return (
    <div className="form__login">
        <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
          <h5 className="mb-4 text-center">Login</h5>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Space style={{ display: 'flex', justifyContent: 'center' }}>
              <SubmitButton form={form} />
              <Button htmlType="reset">Reset</Button>
            </Space>
          </Form.Item>
        </Form>
    </div>
  );
};
export default AdminLogin; 