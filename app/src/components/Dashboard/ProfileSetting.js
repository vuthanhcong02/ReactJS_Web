import React from "react";
import { UserOutlined, SettingOutlined, LogoutOutlined} from "@ant-design/icons";
import { Dropdown, message, Space} from "antd";
const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  if (e.key === "1") {
    console.log("click 1");
  }
  if (e.key === "2") {
    console.log("click 2");
  }
  if (e.key === "3") {
    window.location.href = "admin/login";
  }
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
          icon:<LogoutOutlined />
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