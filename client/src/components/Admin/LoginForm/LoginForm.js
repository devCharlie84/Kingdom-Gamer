import React from "react";
import Form from "antd/lib/form";
import Button from "antd/lib/button";
import Input from "antd/lib/input";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./LoginForm.scss";

export default function LoginForm() {
  // const [inputs, setInputs] = useState({
  //   email: "",
  //   password: "",
  // });

  // const login = async (e) => {
  //   if (
  //     localStorage.getItem("email") === inputs.email &&
  //     localStorage.getItem("password") === inputs.password
  //   ) {
  //     notification["success"]({
  //       message: "Bienvenido",
  //     });
  //     localStorage.setItem("isLogin", true);
  //     window.location.href = "/admin";
  //   } else {
  //     notification["error"]({
  //       message: "Contraseña/Correo Electrónico incorrectos",
  //     });
  //   }
  // };

  // const changeForm = (e) => {
  //   setInputs({ ...inputs, [e.target.name]: e.target.value });
  // };

  const loginUser = () => {
    localStorage.setItem("user", "UserTest");
    localStorage.setItem("isLogin", "true");
    window.location.href = "/admin/";
  };

  return (
    <Form
      className="login-form"
      onFinish={loginUser}
      // onChange={changeForm}
    >
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
