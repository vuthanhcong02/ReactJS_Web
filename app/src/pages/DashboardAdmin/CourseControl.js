import React from 'react';
import { Layout, theme } from 'antd';
const CourseControl = () => {
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
            CourseControl
        </Content>
        </>
    );
};

export default CourseControl;