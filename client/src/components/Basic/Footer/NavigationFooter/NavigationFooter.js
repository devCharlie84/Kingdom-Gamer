import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { CrownOutlined } from "@ant-design/icons";

import "./NavigationFooter.scss";

export default function NavigationFooter() {
  return (
    <Row className="navigation-footer">
      <Col md={24}>
        <h3>Wikis</h3>
      </Col>
      <Col md={12}>
        <RenderListLeft />
      </Col>
      <Col md={12}>
        <RenderListRight />
      </Col>
    </Row>
  );
}

function RenderListLeft() {
  return (
    <ul>
      <li>
        <a
          href="https://darksouls.fandom.com/es/wiki/Wiki_Dark_Souls"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CrownOutlined /> Dark Souls
        </a>
      </li>
      <li>
        <a
          href="https://bloodborne.fandom.com/es/wiki/Wiki_Bloodborne"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CrownOutlined /> Bloodborne
        </a>
      </li>
      <li>
        <a
          href="https://sekiro.fandom.com/es/wiki/Sekiro:_Shadows_Die_Twice_Wiki"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CrownOutlined /> Sekiro
        </a>
      </li>
    </ul>
  );
}

function RenderListRight() {
  return (
    <ul>
      <li>
        <a
          href="https://pokemon.fandom.com/es/wiki/WikiDex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CrownOutlined /> Pokemon
        </a>
      </li>
      <li>
        <a
          href="https://nioh.fandom.com/wiki/Nioh_Wiki"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CrownOutlined /> Nioh
        </a>
      </li>
      <li>
        <a
          href="https://elderscrolls.fandom.com/es/wiki/P%C3%A1gina_principal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CrownOutlined /> TES
        </a>
      </li>
    </ul>
  );
}
