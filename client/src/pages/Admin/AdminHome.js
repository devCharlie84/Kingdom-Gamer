import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Card from "antd/lib/card";
import { InfoCircleOutlined } from "@ant-design/icons";

export default function HomeFunctionalities() {
  return (
    <Row style={{ position: "fixed" }}>
      <Col lg={4} />
      <Col lg={16}>
        <h2
          className="gradient-text"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            textTransform: "uppercase",
            paddingTop: "15px",
            paddingBottom: "15px",
            color: "black",
            fontSize: "20px",
          }}
        >
          Bienvenido a la parte Administrativa de Kingdom Gamer
        </h2>
      </Col>
      <Col lg={4} />

      <Col lg={4} />
      <Col lg={16}>
        <Row>
          <Col md={24}>
            <CardInfo
              title="Manejo de los Posts del Blog"
              description="Podrá crear y editar post del blog con un editor de texto, además de poder eliminar posts del blog y tener un acceso al preview de su post del blog en la página de usuarios."
            />
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <CardInfo
              title="Manejo de Usuarios"
              description="Podrá crear, editar, desactivar/activar y eliminar usuarios."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              title="Manejo de la Pokedex"
              description="Podrá crear, editar y eliminar los pokemones que se traerán con la API de Pokemon."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              title="Manejo de Secciones"
              description="Podrá crear, editar y eliminar enlaces que serán las secciones de la página web de usuarios."
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
    </Row>
  );
}

function CardInfo(props) {
  const { title, description } = props;
  const { Meta } = Card;

  return (
    <Card className="home-functionalities__cardHome">
      <InfoCircleOutlined />
      <Meta title={title} description={description} />
    </Card>
  );
}
