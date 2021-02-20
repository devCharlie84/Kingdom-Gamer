import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import "./MainBanner.scss";

export default function MainBanner() {
  return (
    <div className="main-banner">
      <div className="main-banner__dark" />
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <h2 className="gradient-text">
            Las útlimas noticias <br /> del mundo de los videojuegos.
          </h2>
          <h3 className="gradient-text2">
            Además de Wikis de ayuda, blogs de información y mucho más.
          </h3>
        </Col>
        <Col lg={4} />
      </Row>
    </div>
  );
}
