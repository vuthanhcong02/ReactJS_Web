import React from "react";
import { UserOutlined, SettingOutlined, LogoutOutlined} from "@ant-design/icons";
import { Dropdown, message, Space} from "antd";
const handleButtonClick = (e) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};
const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
export default function ProfileSetting() {
    const items = [
        {
          label: "Thông tin tài khoản",
          key: "1",
          icon: <UserOutlined />
        },
        {
          label: "Cài đặt",
          key: "2",
          icon: <SettingOutlined />
        },
        {
          label: "Đăng xuất",
          key: "3",
          icon: <LogoutOutlined />
        }
    ];
    const menuProps = {
        items,
        onClick: handleMenuClick
      };
    return (
        <Space wrap>
             <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined />    }>
            Vũ Thành Công
            </Dropdown.Button>
        </Space>
    )
}