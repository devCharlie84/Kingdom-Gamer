import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Card from "antd/lib/card";
import { InfoCircleOutlined } from "@ant-design/icons";

import "./HomeFunctionalities.scss";

export default function HomeFunctionalities() {
  return (
    <Row className="home-functionalities">
      <Col lg={4} />
      <Col lg={16} className="home-functionalities__title">
        <h2>¿Qué es lo que hacemos?</h2>
        <h3>
          Somos una página de videojuegos donde publicamos posts de Noticias,
          Blogs de interés para los amantes de los videojuegos.
        </h3>
      </Col>
      <Col lg={4} />

      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              title="Noticias"
              description="Blog de Noticias de última hora sobre videojuegos y gaming, creados por mediante los administradores de Kingdom Gamer."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              title="Acceso 24/7"
              description="La información de nuestro Blog estará disponible todo el tiempo."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              title="Pokemon"
              description="Sección dedicada a los amantes de Pokemon, donde se podrá tener una Pokedex de los pokemones que mas gusten de los administradores de Kingdom Gamer."
            />
          </Col>
        </Row>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              title="Registro"
              description="Para ser un administrador de Kingdom Gamer debes de registrarte y un administrador te dará el acceso de administrador de la página."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              title="Administradores"
              description="Como administrador uno podrá crear, editar y eliminar los blogs de noticias, la pokedex e incluso crear nuevos temas para la página web."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              title="Wikis"
              description="Se tendrá links direccionables a wikis de videojuegos populares."
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
    <Card className="home-functionalities__card">
      <InfoCircleOutlined />
      <Meta title={title} description={description} />
    </Card>
  );
}
