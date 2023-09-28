import React from 'react';
import {
    UserOutlined,
    LoginOutlined,
    GlobalOutlined,
  } from '@ant-design/icons';
  import ImportContactsIcon from '@mui/icons-material/ImportContacts';
  import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
  import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
  import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
  import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
  import {Link} from 'react-router-dom';
  import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
  import { Layout, Menu,Tabs} from 'antd';
const {Sider } = Layout;
const SidebarDashboard = ({collapsed, handleChange}) => {
    // console.log(handleChange);
    return(
        <>
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Menu
              style={{
                  marginTop: 85,
              }}
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['overview']}
              onClick={(e)=>handleChange(e.key)}
              items={[
                {
                  key: 'overview',
                  icon: <GlobalOutlined />,
                  label: <Link style={{textDecoration: 'none'}} to="/admin">Overview</Link>,
                },
                {
                  key: 'course',
                  icon: <ImportContactsIcon />,
                  label: <Link style={{textDecoration: 'none'}} >Course</Link>,
                },
                {
                  key: 'classroom',
                  icon: <SchoolOutlinedIcon />,
                  label: <Link style={{textDecoration: 'none'}} to="/admin/classroom">ClassRoom</Link>,
                },
                {
                  key: 'test',
                  icon: <QuizOutlinedIcon />,
                  label: <Link style={{textDecoration: 'none'}} to="/admin/quiz">Test</Link>,
                },
                {
                  key: 'assignment',
                  icon: <AssignmentOutlinedIcon />,
                  label: <Link style={{textDecoration: 'none'}} to="/admin/assignment">Assignment</Link>,
                },
                {
                  key: 'attendance',
                  icon: <LoginOutlined />,
                  label: <Link style={{textDecoration: 'none'}} to="/admin/attendance">Attendance</Link>,
                },
                {
                  key: 'notification',
                  icon: <MarkUnreadChatAltOutlinedIcon />,
                  label: <Link style={{textDecoration: 'none'}} to="/admin/notification">Notification</Link>,
                },
                {
                  key: 'enrollment',
                  icon: <HowToRegRoundedIcon />,
                  label: <Link style={{textDecoration: 'none'}} to="/admin/enrollment">Enrollment</Link>,
                },
                {
                  key: 'user',
                  icon: <UserOutlined />,
                  label: <Link style={{textDecoration: 'none'}} to="/admin/user">User</Link>,
                },
              ]} 
                
            />
          </Sider>
        </>
    )
}
export default SidebarDashboard