import React from "react";
import { Link, withRouter } from "react-router-dom";
import Menu from "antd/lib/menu";
import Layout from "antd/lib/layout";
import {
  HomeOutlined,
  UserOutlined,
  TrophyOutlined,
  CrownOutlined,
  BookOutlined,
} from "@ant-design/icons";

import "./MenuSider.scss";

function MenuSider(props) {
  const { menuCollapsed, location } = props;
  const { Sider } = Layout;

  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >
        <Menu.Item className="admin-sider__menu-item" key="/admin">
          <Link to={"/admin"}>
            <HomeOutlined />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item className="admin-sider__menu-item" key="/admin/users">
          <Link to={"/admin/users"}>
            <UserOutlined />
            <span className="nav-text">Usuarios</span>
          </Link>
        </Menu.Item>
        <Menu.Item className="admin-sider__menu-item" key="/admin/menu">
          <Link to={"/admin/menu"}>
            <TrophyOutlined />
            <span className="nav-text">Secciones</span>
          </Link>
        </Menu.Item>
        <Menu.Item className="admin-sider__menu-item" key="/admin/pokemon">
          <Link to={"/admin/pokemon"}>
            <CrownOutlined />
            <span className="nav-text">Pokemon</span>
          </Link>
        </Menu.Item>
        <Menu.Item className="admin-sider__menu-item" key="/admin/blog">
          <Link to={"/admin/blog"}>
            <BookOutlined />
            <span className="nav-text">Blog</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default withRouter(MenuSider);
