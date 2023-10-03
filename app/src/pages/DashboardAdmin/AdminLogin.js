import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Space } from 'antd';
import useAuthContext from '../../context/AuthContext';
import './AdminLogin.scss';
const AdminLogin = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const {login,user} = useAuthContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    login({email,password});
    if(Object.keys(user).length !== 0 && (user.role === 'admin'||user.role === 'teacher')){
      localStorage.setItem('user',JSON.stringify({user}));
      navigate('/admin');
    }else{
    navigate('/admin/login');
    }
  };
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
            <Input type="email" onChange={(e) =>  setEmail(e.target.value)} value={email}/>
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
            <Input type="password" onChange={(e) =>  setPassword(e.target.value)} value={password}/>
          </Form.Item>
          <Form.Item>
            <Space style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="primary" htmlType="submit" onClick={handleLogin}>
              Login
            </Button>
              <Button htmlType="reset">Reset</Button>
            </Space>
          </Form.Item>
        </Form>
    </div>
  );
};
export default AdminLogin; 