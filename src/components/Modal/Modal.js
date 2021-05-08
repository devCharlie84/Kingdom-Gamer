import React from "react";
import Modal from "antd/lib/modal";

export default function ModalComponent(props) {
  const { children, title, isVisible, setIsVisible, ...other } = props;

  return (
    <Modal
      title={title}
      centered
      visible={isVisible}
      onCancel={() => setIsVisible(false)}
      footer={false}
      {...other}
    >
      {children}
    </Modal>
  );
}
