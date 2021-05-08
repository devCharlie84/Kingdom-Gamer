import React from "react";
import { Helmet } from "react-helmet";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import Logo from "../../assets/img/png/404_image.png";

export default function Error404() {
  return (
    <>
      <Helmet>
        <title> Error 404 - Not Found</title>
      </Helmet>
      <Row>
        <Col md={4}></Col>
        <Col md={16}>
          <img style={{ width: "100%" }} src={Logo} alt="Error 404" />
        </Col>
        <Col md={4}></Col>
      </Row>
    </>
  );
}
