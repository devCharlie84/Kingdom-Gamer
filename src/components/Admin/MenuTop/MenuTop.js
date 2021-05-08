import React from "react";
import Button from "antd/lib/button";
import { Link } from "react-router-dom";
import { logout } from "../../../api/auth";

import Logo from "../../../assets/img/png/logo-kg.png";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  const logoutUser = () => {
    logout();
    window.location.reload();
  };

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Link to={"/"}>
          <img className="menu-top__left-logo" src={Logo} alt="Kingdom Gamer" />
        </Link>
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={() => logoutUser()}>
          <LogoutOutlined />
        </Button>
      </div>
    </div>
  );
}
