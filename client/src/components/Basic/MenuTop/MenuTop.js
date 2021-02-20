import React from "react";
import Menu from "antd/lib/menu";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/png/logo-kg.png";

import "./MenuTop.scss";

export default function MenuTop() {
  return (
    <Menu className="menu-top-web" mode="horizontal">
      <Menu.Item className="menu-top-web__logo">
        <Link to={"/"}>
          <img src={Logo} alt="Kingdom Gamer" />
        </Link>
      </Menu.Item>
    </Menu>
  );
}
