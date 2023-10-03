import React from "react";
import { UserOutlined, SettingOutlined, LogoutOutlined} from "@ant-design/icons";
import { Dropdown, message, Space} from "antd";
import { useNavigate }  from 'react-router-dom';

export default function ProfileSetting() {
  const navigate = useNavigate();
  const handleMenuClick = (e) => {
    // message.info("Click on menu item.");
    if (e.key === "1") {
      console.log("click 1");
    }
    if (e.key === "2") {
      console.log("click 2");
    }
    if (e.key === "3") {
      localStorage.removeItem('user');
      navigate('/admin/login');
    }
  };
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
              {localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).user.name : ''}-
              {localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).user.role : ''}
            </Dropdown.Button>
        </Space>
    )
}