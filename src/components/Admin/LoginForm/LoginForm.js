import React, { useState } from "react";
import Form from "antd/lib/form";
import Button from "antd/lib/button";
import notification from "antd/lib/notification";
import Input from "antd/lib/input";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { signInApi } from "../../../api/user";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";

import "./LoginForm.scss";

export default function LoginForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const login = async (e) => {
    const result = await signInApi(inputs);

    if (result.message) {
      notification["error"]({
        message: result.message,
      });
    } else {
      const { accessToken, refreshToken } = result;
      sessionStorage.setItem(ACCESS_TOKEN, accessToken);
      sessionStorage.setItem(REFRESH_TOKEN, refreshToken);
      // notification["success"]({
      //   message: "Login Correcto",
      // });

      // netlify
      window.location.href = "/#/admin";
      window.location.reload();

      //AWS S3
      // window.location.href = "/admin";
    }
  };

  const changeForm = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <Form className="login-form" onFinish={login} onChange={changeForm}>
      <Form.Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.35)" }} />}
          type="email"
          name="email"
          placeholder="Correo electrónico"
          className="login-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.35)" }} />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="login-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="login-form__button">
          Iniciar Sesión
        </Button>
      </Form.Item>
    </Form>
  );
}
