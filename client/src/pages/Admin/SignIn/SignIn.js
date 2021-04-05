import React from "react";
import Layout from "antd/lib/layout";
import Tabs from "antd/lib/tabs";
import { Redirect } from "react-router-dom";
import Logo from "../../../assets/img/png/logo-kg.png";
import RegisterForm from "./../../../components/Admin/RegisterForm";
import LoginForm from "./../../../components/Admin/LoginForm";
import { getAccessTokenApi } from "../../../api/auth";

import "./SignIn.scss";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;

  if (getAccessTokenApi()) {
    return <Redirect to="/admin"></Redirect>;
  }

  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={Logo} alt="Kingdom Gamer" />
        </h1>
        <div className="sign-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={"Iniciar Sesión"} key="1">
              <LoginForm />
            </TabPane>
            <TabPane tab={"Registrarse"} key="2">
              <RegisterForm />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}
