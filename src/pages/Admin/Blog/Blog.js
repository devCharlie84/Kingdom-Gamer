import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Button from "antd/lib/button";
import notification from "antd/lib/notification";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import ModalComponent from "../../../components/Modal";
import Pagination from "../../../components/Pagination";
import PostsList from "../../../components/Admin/Blog/PostsList";
import AddEditPostForm from "../../../components/Admin/Blog/AddEditPostForm";
import { getPostsApi } from "../../../api/post";

import "./Blog.scss";

function Blog(props) {
  const { location, history } = props;

  const [posts, setPosts] = useState(null);
  const [reloadPosts, setReloadPosts] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const { page = 1 } = queryString.parse(location.search);

  useEffect(() => {
    getPostsApi(7, page)
      .then((response) => {
        if (response?.code !== 200) {
          notification["warning"]({
            message: response.message,
          });
        } else {
          setPosts(response.posts);
        }
      })
      .catch((error) => {
        notification["error"]({
          message: error.message,
        });
      });
    setReloadPosts(false);
  }, [page, reloadPosts]);

  const addPost = () => {
    setIsVisibleModal(true);
    setModalTitle("Agregando Post");
    setModalContent(
      <AddEditPostForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadPosts={setReloadPosts}
        post={null}
      />
    );
  };

  const editPost = (post) => {
    setIsVisibleModal(true);
    setModalTitle("Editar Post");
    setModalContent(
      <AddEditPostForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadPosts={setReloadPosts}
        post={post}
      />
    );
  };

  if (!posts) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Blog | Kindom Gamer </title>
        <meta
          name="description"
          content="Blog | Kingdom Gamer"
          data-react-helmet="true"
        />
      </Helmet>
      <div className="blog">
        <div className="blog__add-post">
          <Button type="primary" onClick={addPost}>
            Nuevo Post
          </Button>
        </div>
        <PostsList
          posts={posts}
          setReloadPosts={setReloadPosts}
          editPost={editPost}
        />
        <Pagination posts={posts} location={location} history={history} />
        <ModalComponent
          title={modalTitle}
          isVisible={isVisibleModal}
          setIsVisible={setIsVisibleModal}
          width="50%"
        >
          {modalContent}
        </ModalComponent>
      </div>
    </>
  );
}

export default withRouter(Blog);
