import React from "react";
import Layout from "antd/lib/layout";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import MyInfo from "./MyInfo";
import NavigationFooter from "./NavigationFooter";
import Newsletter from "./Newsletter";

import "./Footer.scss";

export default function Footer() {
  const { Footer } = Layout;

  return (
    <Footer className="footer">
      <Row>
        <Col md={4} />
        <Col md={16}>
          <Row>
            <Col md={8}>
              <MyInfo />
            </Col>
            <Col md={8}>
              <Newsletter />
            </Col>
            <Col md={8}>
              <NavigationFooter />
            </Col>
          </Row>
          <Row className="footer__copyright">
            <Col md={12}>© 2021 All Right Reserved​</Col>
            <Col md={12}>KINGDOM GAMER | GAMING BLOG</Col>
          </Row>
        </Col>
        <Col md={4} />
      </Row>
    </Footer>
  );
}
