import React, { useState, useEffect } from "react";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import notification from "antd/lib/notification";
import { updateEnlaceApi } from "../../../../api/enlace";
import { getAccessTokenApi } from "../../../../api/auth";
import { FontSizeOutlined, LinkOutlined } from "@ant-design/icons";

import "./EditEnlaceForm.scss";

export default function EditEnlaceForm(props) {
  const { setIsVisibleModal, setReloadEnlace, enlace } = props;
  const [enlaceData, setEnlaceData] = useState(enlace);

  useEffect(() => {
    setEnlaceData(enlace);
  }, [enlace]);

  const editEnlace = (e) => {
    if (!enlaceData.title || !enlaceData.url) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      const token = getAccessTokenApi();
      updateEnlaceApi(token, enlaceData._id, enlaceData)
        .then((response) => {
          notification["success"]({
            message: response,
          });
          setIsVisibleModal(false);
          setReloadEnlace(true);
        })
        .catch((error) => {
          notification["error"]({
            message: error.message,
          });
        });
    }
  };

  return (
    <div className="edit-enlace-form">
      <EditForm
        enlaceData={enlaceData}
        setEnlaceData={setEnlaceData}
        editEnlace={editEnlace}
      />
    </div>
  );
}

function EditForm(props) {
  const { enlaceData, setEnlaceData, editEnlace } = props;

  return (
    <Form className="form-edit" onFinish={editEnlace}>
      <Form.Item>
        <Input
          prefix={<FontSizeOutlined />}
          placeholder="Título"
          value={enlaceData.title}
          onChange={(e) =>
            setEnlaceData({ ...enlaceData, title: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item>
        <Input
          prefix={<LinkOutlined />}
          placeholder="URL"
          value={enlaceData.url}
          onChange={(e) =>
            setEnlaceData({ ...enlaceData, url: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Actualizar Enlace
        </Button>
      </Form.Item>
    </Form>
  );
}
