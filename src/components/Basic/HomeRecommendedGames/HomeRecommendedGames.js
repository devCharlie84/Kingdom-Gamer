import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Card from "antd/lib/card";
import Game1 from "../../../assets/img/jpg/game1.jpg";
import Game2 from "../../../assets/img/jpg/game2.jpg";
import Game3 from "../../../assets/img/jpg/game3.jpg";
import Game4 from "../../../assets/img/jpg/game4.jpg";
import Game5 from "../../../assets/img/jpg/game5.jpg";
import Game6 from "../../../assets/img/jpg/game6.jpg";
import Game7 from "../../../assets/img/jpg/game7.jpg";
import Game8 from "../../../assets/img/jpg/game8.jpg";
import Rate from "antd/lib/rate";

import "./HomeRecommendedGames.scss";

export default function HomeRecommendedGames() {
  return (
    <Row className="home-recommended-games">
      <Col lg={24} className="home-recommended-games__title">
        {/* <hr style={{ border: "1px solid red" }}></hr> */}
        <h2 className="gradient-text">Juegos Recomendados</h2>
      </Col>
      <Col lg={2} />
      <Col lg={20}>
        <Row className="row-games">
          <Col md={6}>
            <CardGame
              image={Game1}
              title="Persona 5 Royal"
              subtitle="Atlus"
              link="https://store.playstation.com/es-gt/product/UP0177-CUSA17416_00-PERSONA5R0000000"
            />
          </Col>
          <Col md={6}>
            <CardGame
              image={Game2}
              title="Divinity Original Sin 2"
              subtitle="Larian Studios"
              link="https://store.steampowered.com/app/435150/Divinity_Original_Sin_2__Definitive_Edition/"
            />
          </Col>
          <Col md={6}>
            <CardGame
              image={Game3}
              title="Bloodborne"
              subtitle="FromSoftware"
              link="https://store.playstation.com/es-gt/product/UP9000-CUSA00900_00-SPEXPANSIONDLC03"
            />
          </Col>
          <Col md={6}>
            <CardGame
              image={Game4}
              title="The Witcher 3: Wild Hunt"
              subtitle="CD Projekt RED"
              link="https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/"
            />
          </Col>
          <Col md={6}>
            <CardGame
              image={Game5}
              title="NieR Automata"
              subtitle="Platinum Games"
              link="https://store.steampowered.com/app/524220/NieRAutomata/"
            />
          </Col>
          <Col md={6}>
            <CardGame
              image={Game6}
              title="God of War"
              subtitle="SCE Santa Monica Studio"
              link="https://store.playstation.com/es-gt/product/UP9000-CUSA07408_00-00000000GODOFWAR"
            />
          </Col>
          <Col md={6}>
            <CardGame
              image={Game7}
              title="TES V: Skyrim"
              subtitle="Bethesda Game Studios"
              link="https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/"
            />
          </Col>
          <Col md={6}>
            <CardGame
              image={Game8}
              title="Diablo III"
              subtitle="Blizzard Entertainment"
              link="https://us.shop.battle.net/es-es/product/diablo-iii?p=38789"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={2} />
    </Row>
  );
}

function CardGame(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className="home-recommended-games__card"
        cover={<img src={image} alt={title} />}
      >
        <Meta title={title} description={subtitle}></Meta>
        <div className="home-recommended-games__card__rate">
          <Rate disabled defaultValue={5} />
        </div>
      </Card>
    </a>
  );
}
