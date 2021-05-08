import React, { useState } from "react";
import Button from "antd/lib/button";
import notification from "antd/lib/notification";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import { MailOutlined } from "@ant-design/icons";
import { suscribeNewsletterApi } from "../../../../api/newsletter";

import "./Newsletter.scss";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    // eslint-disable-next-line no-useless-escape
    const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const resultValidation = emailValid.test(email);

    if (!resultValidation) {
      notification["error"]({
        message: "El correo electrónico no es valido.",
      });
    } else {
      suscribeNewsletterApi(email).then((response) => {
        if (response.code !== 200) {
          notification["warning"]({
            message: response.message,
          });
        } else {
          notification["success"]({
            message: response.message,
          });
          setEmail("");
        }
      });
    }
  };

  return (
    <div className="newsletter">
      <h3> Newsletter</h3>
      <Form onFinish={onSubmit}>
        <Form.Item>
          <Input
            prefix={<MailOutlined />}
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
