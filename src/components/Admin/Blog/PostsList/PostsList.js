import React from "react";
import List from "antd/es/list";
import Button from "antd/lib/button";
import Modal from "antd/lib/modal";
import notification from "antd/lib/notification";
import { Link } from "react-router-dom";
import { getAccessTokenApi } from "../../../../api/auth";
import { deletePostApi } from "../../../../api/post";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import "./PostsList.scss";

const { confirm } = Modal;

export default function PostsList(props) {
  const { posts, setReloadPosts, editPost } = props;

  const deletePost = (post) => {
    const token = getAccessTokenApi();

    confirm({
      title: "Advertencia",
      content: `¿Estas seguro de eliminar el Post ${post.title}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deletePostApi(token, post._id)
          .then((response) => {
            const typeNotification =
              response.code === 200 ? "success" : "warning";
            notification[typeNotification]({
              message: response.message,
            });
            setReloadPosts(true);
          })
          .catch((error) => {
            notification["error"]({
              message: error.message,
            });
          });
      },
    });
  };

  return (
    <div className="posts-list">
      <List
        dataSource={posts.docs}
        renderItem={(post) => (
          <Post post={post} deletePost={deletePost} editPost={editPost} />
        )}
      />
    </div>
  );
}

function Post(props) {
  const { post, deletePost, editPost } = props;

  return (
    <List.Item
      actions={[
        <Link to={`/blog/${post.url}`} target="_blank">
          <Button type="primary">
            <EyeOutlined />
          </Button>
        </Link>,
        <Button type="primary" onClick={() => editPost(post)}>
          <EditOutlined />
        </Button>,
        <Button type="danger" onClick={() => deletePost(post)}>
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta title={post.title} />
    </List.Item>
  );
}
