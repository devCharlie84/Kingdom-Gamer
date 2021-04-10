import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import queryString from "query-string";
import moment from "moment";
import "moment/locale/es";
import List from "antd/es/list";
import Spin from "antd/lib/spin";
import notification from "antd/lib/notification";

import Pagination from "../../../Pagination";
import { getPostsApi } from "../../../../api/post";

import "./PostsListWeb.scss";

export default function PostsListWeb(props) {
  const { location, history } = props;
  const [posts, setPosts] = useState(null);
  const { page = 1 } = queryString.parse(location.search);

  useEffect(() => {
    getPostsApi(8, page)
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
  }, [page]);

  if (!posts) {
    return (
      <Spin
        tip="Cargando Noticias"
        style={{ width: "100%", padding: "200px 0" }}
      />
    );
  }

  return (
    <div className="posts-list-web">
      <h1>Blog</h1>
      <List
        dataSource={posts.docs}
        renderItem={(post) => <Post post={post} />}
      />
      <Pagination posts={posts} location={location} history={history} />
    </div>
  );
}

function Post(props) {
  const { post } = props;
  const day = moment(post.date).format("DD");
  const month = moment(post.date).format("MMMM");
  const year = moment(post.date).format("YYYY");

  return (
    <>
      <Helmet>
        <title> Blog | Kindom Gamer</title>
      </Helmet>
      <List.Item className="post">
        <div className="post__date">
          <span>
            {day} {month}
          </span>
          <span>{year}</span>
        </div>
        {console.log(post.url)}

        <List.Item.Meta
          title={<Link to={`blog/${post.url}`}> {post.title} </Link>}
        />
      </List.Item>
    </>
  );
}
