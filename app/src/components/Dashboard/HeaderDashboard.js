import React from "react";
import { Layout, Button, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import ProfileSetting from "./ProfileSetting";
const HeaderDashboard = ({handleToggle, collapsed}) => {
  const { Header } = Layout;

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Header
        className="header__dashboard"
        style={{
          padding: 0,
          background: colorBgContainer,
          display: "flex",
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
        <div className="profile__setting container d-flex justify-content-end" style={{paddingRight: '30px'}}>
            <ProfileSetting/>
        </div>
      </Header>
    </>
  );
};
export default HeaderDashboard;
