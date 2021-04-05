import React, { useState } from "react";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import notification from "antd/lib/notification";
import Tooltip from "antd/lib/tooltip";
import {
  UserOutlined,
  LockOutlined,
  InfoCircleOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import {
  emailValidation,
  textValidation,
  passwordValidation,
} from "../../../utils/formValidation";

import { signUpApi } from "../../../api/user";

import "./RegisterForm.scss";

export default function RegisterForm() {
  const [inputs, setInputs] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [formValid, setFormValid] = useState({
    name: false,
    lastname: false,
    email: false,
    password: false,
    repeatPassword: false,
  });

  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const inputValidation = (e) => {
    const { type, name } = e.target;
    if (type === "text") {
      setFormValid({
        ...formValid,
        [name]: textValidation(e.target),
      });
    }
    if (type === "email") {
      setFormValid({
        ...formValid,
        [name]: emailValidation(e.target),
      });
    }
    if (type === "password") {
      setFormValid({
        ...formValid,
        [name]: passwordValidation(e.target),
      });
    }
  };

  const register = async (e) => {
    const { name, lastname, email, password, repeatPassword } = formValid;
    const nameVal = inputs.name;
    const lastnameVal = inputs.lastname;
    const emailVal = inputs.email;
    const passwordVal = inputs.password;
    const repeatPasswordVal = inputs.repeatPassword;

    if (
      !nameVal ||
      !lastnameVal ||
      !emailVal ||
      !passwordVal ||
      !repeatPasswordVal
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      if (passwordVal !== repeatPasswordVal) {
        notification["error"]({
          message: "Las contraseñas no son iguales.",
        });
      } else {
        if (name & lastname & email & password & repeatPassword) {
          const result = await signUpApi(inputs);
          if (!result.isSuccess) {
            notification["error"]({
              message: result.message,
            });
          } else {
            notification["success"]({
              message: result.message,
            });
            resetForm();
          }
        } else {
          notification["error"]({
            message: "Complete los campos correctamente",
          });
        }
      }
    }
  };

  const resetForm = () => {
    const inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("success");
      inputs[i].classList.remove("error");

      setInputs({
        name: "",
        lastname: "",
        email: "",
        password: "",
        repeatPassword: "",
      });

      setFormValid({
        name: false,
        lastname: false,
        email: false,
        password: false,
        repeatPassword: false,
      });
    }
  };

  return (
    <Form className="register-form" onFinish={register} onChange={changeForm}>
      <Form.Item>
        <Input
          prefix={<AuditOutlined style={{ color: "rgba(0,0,0,.35)" }} />}
          className="register-form__input"
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={inputValidation}
          value={inputs.name}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<AuditOutlined style={{ color: "rgba(0,0,0,.35)" }} />}
          className="register-form__input"
          type="text"
          name="lastname"
          placeholder="Apellido"
          onChange={inputValidation}
          value={inputs.lastname}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.35)" }} />}
          className="register-form__input"
          type="email"
          name="email"
          placeholder="Correo electrónico"
          onChange={inputValidation}
          value={inputs.email}
        />
      </Form.Item>
      <Form.Item>
        <Input
          suffix={
            <Tooltip title="La contraseña debe de contener al menos 8 carácteres. Una mayúscula (A-Z). Una minúscula (a-z). Un número (0-9) y un carácter especial (@$!%*#?&)">
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.75)" }} />
            </Tooltip>
          }
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.35)" }} />}
          className="register-form__input"
          name="password"
          type="password"
          placeholder="Contraseña"
          onChange={inputValidation}
          value={inputs.password}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.35)" }} />}
          className="register-form__input"
          type="password"
          name="repeatPassword"
          placeholder="Repetir Contraseña"
          onChange={inputValidation}
          value={inputs.repeatPassword}
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="register-form__button">
          Registrarse
        </Button>
      </Form.Item>
    </Form>
  );
}
