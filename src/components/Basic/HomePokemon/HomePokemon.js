import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Card from "antd/lib/card";
import Button from "antd/lib/button";
import { Link } from "react-router-dom";
import Pseudolegendario1 from "../../../assets/img/png/garchomp.png";
import Pseudolegendario2 from "../../../assets/img/png/dragonite.png";
import Pseudolegendario3 from "../../../assets/img/png/metagross.png";
import Pseudolegendario4 from "../../../assets/img/png/tyranitar.png";
import Pseudolegendario5 from "../../../assets/img/png/hydreigon.png";
import Pseudolegendario6 from "../../../assets/img/png/salamence.png";

import "./HomePokemon.scss";

export default function HomePokemon() {
  return (
    <Row className="home-pokemon">
      <Col lg={2} />
      <Col lg={20}>
        <Row className="row-pokemon">
          <Col md={6}>
            <CardGame
              image={Pseudolegendario1}
              title="Garchomp"
              subtitle="Tipo: Dragón"
            />
          </Col>

          <Col md={12} className="home-pokemon__more">
            <Link to="./pokemon">
              <Button>Ir a la Pokedex</Button>
            </Link>
          </Col>

          <Col md={6}>
            <CardGame
              image={Pseudolegendario2}
              title="Dragonite"
              subtitle="Tipo: Dragón"
            />
          </Col>

          <Col md={6}>
            <CardGame
              image={Pseudolegendario3}
              title="Metagross"
              subtitle="Tipo: Acero"
            />
          </Col>
          <Col md={6}>
            <CardGame
              image={Pseudolegendario4}
              title="Tyranitar"
              subtitle="Tipo: Roca"
            />
          </Col>
          <Col md={6}>
            <CardGame
              image={Pseudolegendario5}
              title="Hydreigon "
              subtitle="Tipo: Siniestro-Dragón"
            />
          </Col>
          <Col md={6}>
            <CardGame
              image={Pseudolegendario6}
              title="Salamence"
              subtitle="Tipo: Dragón"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={2} />
    </Row>
  );
}

function CardGame(props) {
  const { image, title, subtitle } = props;
  const { Meta } = Card;

  return (
    <Card className="home-games__card" cover={<img src={image} alt={title} />}>
      <Meta title={title} description={subtitle}></Meta>
    </Card>
  );
}
