import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Spin from "antd/lib/spin";
// import { PacmanLoader } from "react-spinners";
import notification from "antd/lib/notification";
import moment from "moment";
import "moment/locale/es";

import { getPostApi } from "../../../../api/post";

import "./PostInfo.scss";

export default function PostInfo(props) {
  const { url } = props;
  const [postInfo, setPostInfo] = useState(null);

  useEffect(() => {
    getPostApi(url)
      .then((response) => {
        if (response.code !== 200) {
          notification["warning"]({
            message: response.message,
          });
        } else {
          setPostInfo(response.post);
        }
      })
      .catch((error) => {
        notification["warning"]({
          message: error.message,
        });
      });
  }, [url]);

  if (!postInfo) {
    return (
      <Spin tip="Cargando" style={{ width: "100%", padding: "200px 0" }} />
      // <PacmanLoader className="UserItem-PacMan" color="#FFF" loading={true} />
    );
  }

  return (
    <>
      <Helmet>
        <title>{postInfo.title} | Kindom Gamer</title>
      </Helmet>
      <div className="post-info">
        <h1 className="post-info__title">{postInfo.title}</h1>
        <div className="post-info__creation-date">
          {moment(postInfo.date).local("es").format("LL")}
        </div>
        <hr></hr>
        <div
          className="post-info__description"
          dangerouslySetInnerHTML={{ __html: postInfo.description }}
        />
      </div>
    </>
  );
}
