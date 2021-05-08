import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { useParams } from "react-router-dom";
import PostsListWeb from "../../components/Basic/Blog/PostsListWeb";
import PostInfo from "../../components/Basic/Blog/PostInfo";

export default function Blog(props) {
  const { location, history } = props;
  const { url } = useParams();

  return (
    <Row>
      <Col md={4} />
      <Col md={16}>
        {!url ? (
          <PostsListWeb location={location} history={history} />
        ) : (
          <PostInfo url={url} />
        )}
      </Col>
      <Col md={4} />
    </Row>
  );
}
