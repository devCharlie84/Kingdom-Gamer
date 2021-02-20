import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Card from "antd/lib/card";
import Button from "antd/lib/button";
import { Link } from "react-router-dom";
import Genre1 from "../../../assets/img/jpg/genre1.jpg";
import Genre2 from "../../../assets/img/jpg/genre2.jpg";
import Genre3 from "../../../assets/img/jpg/genre3.jpg";
import Genre4 from "../../../assets/img/jpg/genre4.jpg";
import Genre5 from "../../../assets/img/jpg/genre5.jpg";
import Genre6 from "../../../assets/img/jpg/genre6.jpg";

import "./HomeGames.scss";

export default function HomeGames() {
  return (
    <Row className="home-games">
      <Col lg={24} className="home-games__title">
        <h2 className="gradient-text">Lo último en Noticias</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-games">
          <Col md={6}>
            <CardGame
              image={Genre1}
              title="Shooters"
              subtitle="First-person shooter - Third-person shooter"
            />
          </Col>
          <Col md={6}>
            <CardGame
              image={Genre2}
              title="Platformers"
              subtitle="Platform - Roguelike - Metroidvania"
            />
          </Col>
          <Col md={6}>
            <CardGame
              image={Genre3}
              title="Fighting Games"
              subtitle="Arcade - Mortal Kombat - Super Smash Bros"
            />
          </Col>
          <Col md={6}>
            <CardGame
              image={Genre4}
              title="Survival Games"
              subtitle="Survival Horror - Crafting - Battle Royals "
            />
          </Col>
          <Col md={6}>
            <CardGame
              image={Genre5}
              title="Role-Playing Games"
              subtitle="The Elders Scrolls - Fallout - Divinity Original Sin "
            />
          </Col>
          <Col md={12} className="home-games__more">
            <Link to="./blog">
              <Button>Ir al Blog de noticias</Button>
            </Link>
          </Col>
          <Col md={6}>
            <CardGame
              image={Genre6}
              title="EA Sports games"
              subtitle="FIFA - NFL - UFC - NHL"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
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
