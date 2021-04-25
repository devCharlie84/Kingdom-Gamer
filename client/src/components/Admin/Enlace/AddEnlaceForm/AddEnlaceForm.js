import React, { useState } from "react";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Select from "antd/lib/select";
import Button from "antd/lib/button";
import notification from "antd/lib/notification";
import { getAccessTokenApi } from "../../../../api/auth";
import { addEnlaceApi } from "../../../../api/enlace";
import { FontSizeOutlined } from "@ant-design/icons";

import "./AddEnlaceForm.scss";

export default function AddEnlaceForm(props) {
  const { setIsVisibleModal, setReloadEnlace } = props;
  const [enlaceData, setEnlaceData] = useState({});

  const addEnlace = (e) => {
    let finalData = {
      title: enlaceData.title,
      url: (enlaceData.http ? enlaceData.http : "http://") + enlaceData.url,
    };

    if (!finalData.title || !finalData.url || !enlaceData.url) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      const token = getAccessTokenApi();
      finalData.active = false;
      finalData.order = 100;

      addEnlaceApi(token, finalData)
        .then((response) => {
          notification["success"]({
            message: response,
          });
          setIsVisibleModal(false);
          setReloadEnlace(true);
          setEnlaceData({});
          finalData = {};
        })
        .catch((error) => {
          notification["error"]({
            message: "Error en el servidor.",
          });
        });
    }
  };

  return (
    <div className="add-enlace-form">
      <AddForm
        enlaceData={enlaceData}
        setEnlaceData={setEnlaceData}
        addEnlace={addEnlace}
      />
    </div>
  );
}

function AddForm(props) {
  const { enlaceData, setEnlaceData, addEnlace } = props;
  const { Option } = Select;

  const selectBefore = (
    <Select
      defaultValue="http://"
      style={{ width: 90 }}
      onChange={(e) => setEnlaceData({ ...enlaceData, http: e })}
    >
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
      <Option value="/">/</Option>
    </Select>
  );

  return (
    <Form className="form-add" onFinish={addEnlace}>
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
          addonBefore={selectBefore}
          placeholder="URL"
          value={enlaceData.url}
          onChange={(e) =>
            setEnlaceData({ ...enlaceData, url: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear Enlace
        </Button>
      </Form.Item>
    </Form>
  );
}
