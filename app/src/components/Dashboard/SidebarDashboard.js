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
                  label: 'Overview',
                },
                {
                  key: 'course',
                  icon: <ImportContactsIcon />,
                  label: "Course",
                },
                {
                  key: 'classroom',
                  icon: <SchoolOutlinedIcon />,
                  label: "ClassRoom",
                },
                {
                  key: 'test',
                  icon: <QuizOutlinedIcon />,
                  label: "Test",
                },
                {
                  key: 'assignment',
                  icon: <AssignmentOutlinedIcon />,
                  label: "Assignment",
                },
                {
                  key: 'attendance',
                  icon: <LoginOutlined />,
                  label: "Attendance",
                },
                {
                  key: 'notification',
                  icon: <MarkUnreadChatAltOutlinedIcon />,
                  label: "Notification",
                },
                {
                  key: 'enrollment',
                  icon: <HowToRegRoundedIcon />,
                  label: "Enrollment",
                },
                {
                  key: 'user',
                  icon: <UserOutlined />,
                  label: "User",
                },
              ]} 
                
            />
          </Sider>
        </>
    )
}
export default SidebarDashboard