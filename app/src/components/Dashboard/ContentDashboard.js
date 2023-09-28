import React from 'react';
import { Layout,theme } from 'antd';
const ContentDashboard = () => {
    const { Content } = Layout;
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return (
        <>
         <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
              }}
            > 
            content 
        </Content>
        </>
    );
}
export default ContentDashboard;