import React from "react";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import { MailOutlined } from "@ant-design/icons";

import "./Newsletter.scss";

export default function Newsletter() {
  return (
    <div className="newsletter">
      <h3> Newsletter</h3>
      <Form onFinish={() => console.log("Suscrito")}>
        <Form.Item>
          <Input prefix={<MailOutlined />} placeholder="Correo electrónico" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="login-form-button">
            Suscribirse
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
