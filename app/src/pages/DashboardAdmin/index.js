import React ,{useState,useEffect} from 'react';
import { Layout} from 'antd';
import HeaderDashboard from '../../components/Dashboard/HeaderDashboard';
import SidebarDashboard from '../../components/Dashboard/SidebarDashboard';
import MainDashboard from '../../components/Dashboard/MainDashboard';
import ClassControl from './ClassControl';
import CourseControl from './CourseControl';
import UserControl from './UserControl';
import EnrollmentControl from './EnrollmentControl';
import NotificationControl from './NotificationControl';
import AttendanceControl from './AttendanceControl';
import TestControl from './TestControl';
import AssignmentControl from './AssignmentControl';
import { theme } from 'antd';

const DashboardAdmin = () => {
  const { Content } = Layout;
  const {
      token: { colorBgContainer },
    } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('overview');
  const handleToggle = () => {
    setCollapsed(!collapsed);
  }
  const handleChange = (key) => {
    setSelectedMenu(key);
    window.history.pushState({}, '', `/admin/${key}`);
  }
  const renderContent = () => {
    switch (selectedMenu) {
      case 'overview':
        return <MainDashboard />;
      case 'course':
        return <CourseControl />
      case 'classroom':
        return <ClassControl />
      case 'test':
        return <TestControl />
      case 'assignment':
        return <AssignmentControl />
      case 'notification':
        return <NotificationControl />
      case 'enrollment':
        return <EnrollmentControl />
      case 'attendance':
        return <AttendanceControl />
      case 'user':
        return <UserControl />
      default:
        return '404';
    }
  }
  console.log(selectedMenu);
  return (
      <Layout style={{ minHeight: '100vh' }}>
            <SidebarDashboard collapsed={collapsed} handleChange={handleChange}/>
            <Layout>
              <HeaderDashboard handleToggle={handleToggle} collapsed={collapsed}/>
                 <Content
                      style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                      }}
                    > 
                      {renderContent()}
                </Content>
            </Layout>
      </Layout>
  );
};
export default DashboardAdmin;