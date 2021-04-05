import React, { useState, useEffect } from "react";
import Switch from "antd/es/switch";
import List from "antd/es/list";
import Button from "antd/lib/button";
import notification from "antd/lib/notification";
import Modal from "antd/lib/modal";
import ModalComponent from "../../../../components/Modal";
import DragSortableList from "react-drag-sortable";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  updateEnlaceApi,
  activateEnlaceApi,
  deleteEnlaceApi,
} from "../../../../api/enlace";
import { getAccessTokenApi } from "../../../../api/auth";
import AddEnlaceForm from "../AddEnlaceForm";
import EditEnlaceForm from "../EditEnlaceForm";

import "./EnlaceList.scss";

const { confirm } = Modal;

export default function EnlaceList(props) {
  const { enlace, setReloadEnlace } = props;
  const [listItems, setListItems] = useState([]);

  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const listItemsArray = [];

    enlace.forEach((item) => {
      listItemsArray.push({
        content: (
          <EnlaceItem
            item={item}
            activateEnlace={activateEnlace}
            editEnlaceModal={editEnlaceModal}
            showDeleteConfirm={showDeleteConfirm}
          />
        ),
      });
    });
    setListItems(listItemsArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enlace]);

  const activateEnlace = (enlaceId, status) => {
    const token = getAccessTokenApi();
    activateEnlaceApi(token, enlaceId, status).then((response) => {
      notification["success"]({ message: response });
    });
  };

  const addEnlaceModal = () => {
    setIsVisibleModal(true);
    setModalTitle("Creación de Enlace");
    setModalContent(
      <AddEnlaceForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadEnlace={setReloadEnlace}
      />
    );
  };

  const editEnlaceModal = (enlace) => {
    setIsVisibleModal(true);
    setModalTitle(enlace.title);
    setModalContent(
      <EditEnlaceForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadEnlace={setReloadEnlace}
        enlace={enlace}
      />
    );
  };

  const showDeleteConfirm = (enlace) => {
    const token = getAccessTokenApi();

    confirm({
      title: "Advertencia:",
      content: `Estas a punto de eliminar ${enlace.url}.`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deleteEnlaceApi(token, enlace._id)
          .then((response) => {
            notification["success"]({
              message: response,
            });
            setReloadEnlace(true);
          })
          .catch((error) => {
            notification["error"]({
              message: error.message,
            });
          });
      },
    });
  };

  const onSort = (sortedList, dropEvent) => {
    const token = getAccessTokenApi();

    sortedList.forEach((item) => {
      const { _id } = item.content.props.item;
      const order = item.rank;
      updateEnlaceApi(token, _id, { order });
    });
  };

  return (
    <div className="enlace-list">
      <div className="enlace-list__header">
        <Button type="primary" onClick={addEnlaceModal}>
          Crear Enlace
        </Button>
      </div>

      <div className="enlace-list__items">
        <DragSortableList items={listItems} onSort={onSort} type="vertical" />
      </div>
      <ModalComponent
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      >
        {modalContent}
      </ModalComponent>
    </div>
  );
}

function EnlaceItem(props) {
  const { item, activateEnlace, editEnlaceModal, showDeleteConfirm } = props;

  return (
    <List.Item
      actions={[
        <Switch
          defaultChecked={item.active}
          onChange={(e) => activateEnlace(item._id, e)}
        />,
        <Button type="primary" onClick={() => editEnlaceModal(item)}>
          <EditOutlined />
        </Button>,
        <Button type="danger" onClick={() => showDeleteConfirm(item)}>
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta title={item.title} description={item.url} />
    </List.Item>
  );
}
