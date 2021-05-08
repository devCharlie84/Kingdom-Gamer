import React, { useState } from "react";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Select from "antd/lib/select";
import Button from "antd/lib/button";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import notification from "antd/lib/notification";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";

import { signUpAdminApi } from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";

import "./AddUserForm.scss";

export default function AddUserForm(props) {
  const { setIsVisibleModal, setReloadUsers } = props;
  const [userData, setUserData] = useState({});

  const addUser = (event) => {
    if (
      !userData.name ||
      !userData.lastname ||
      !userData.role ||
      !userData.email ||
      !userData.password ||
      !userData.repeatedPassword
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else if (userData.password !== userData.repeatedPassword) {
      notification["error"]({
        message: "Las contraseñas deben ser iguales.",
      });
    } else {
      const token = getAccessTokenApi();

      signUpAdminApi(token, userData)
        .then((response) => {
          notification["success"]({
            message: response.message,
          });
          setIsVisibleModal(false);
          setReloadUsers(true);
          setUserData({});
        })
        .catch((error) => {
          notification["error"]({
            message: error.message,
          });
        });
    }
  };

  return (
    <div className="add-user-form">
      <AddForm
        userData={userData}
        setUserData={setUserData}
        addUser={addUser}
      />
    </div>
  );
}

function AddForm(props) {
  const { userData, setUserData, addUser } = props;
  const { Option } = Select;

  return (
    <Form className="form-add" onFinish={addUser}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined />}
              placeholder="Nombre"
              value={userData.name}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  name: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined />}
              placeholder="Apellido"
              value={userData.lastname}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  lastname: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<MailOutlined />}
              placeholder="Correo Electrónico"
              type="email"
              value={userData.email}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  email: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item>
            <Select
              placeholder="Rol del Usuario"
              onChange={(e) => setUserData({ ...userData, role: e })}
              value={userData.role}
            >
              <Option value="admin">Administrador</Option>
              <Option value="poketrainer">Pokemon Trainer</Option>
              <Option value="editor">Editor</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<LockOutlined />}
              placeholder="Contraseña"
              type="password"
              value={userData.password}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  password: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<LockOutlined />}
              placeholder="Repetir Contraseña"
              type="password"
              value={userData.repeatedPassword}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  repeatedPassword: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear Usuario
        </Button>
      </Form.Item>
    </Form>
  );
}
