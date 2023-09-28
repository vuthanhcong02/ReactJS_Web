import React ,{useState} from 'react';
import { Layout} from 'antd';
import HeaderDashboard from '../../components/Dashboard/HeaderDashboard';
import SidebarDashboard from '../../components/Dashboard/SidebarDashboard';
import ContentDashboard from '../../components/Dashboard/ContentDashboard';
import CourseControl from './CourseControl';
const DashboardAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('overview');

  const handleToggle = () => {
    setCollapsed(!collapsed);
  }
  const handleChange = (key) => {
    setSelectedMenu(key);
  }
  const renderContent = () => {
    switch (selectedMenu) {
      case 'overview':
        return <ContentDashboard />;
      case 'course':
        return <CourseControl />
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
                {renderContent()} 
            </Layout>
      </Layout>
  );
};
export default DashboardAdmin;