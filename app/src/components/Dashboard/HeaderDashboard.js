import React from "react";
import { Layout, Button, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
const HeaderDashboard = ({handleToggle, collapsed}) => {
  const { Header } = Layout;

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={handleToggle}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
      </Header>
    </>
  );
};
export default HeaderDashboard;
