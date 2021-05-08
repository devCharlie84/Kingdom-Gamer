import React, { useState, useEffect } from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import notification from "antd/lib/notification";
import Spin from "antd/lib/spin";
import { getPokemonesApi } from "../../api/pokemon";
import PokemonesList from "../../components/Basic/PokemonesList";

export default function Pokemones() {
  const [pokemones, setPokemones] = useState(null);

  useEffect(() => {
    getPokemonesApi()
      .then((response) => {
        if (response?.code !== 200) {
          notification["warning"]({ message: response.message });
        } else {
          setPokemones(response.pokemones);
        }
      })
      .catch((error) => {
        notification["error"]({ message: error.message });
      });
  }, []);

  return (
    <Row>
      <Col md={4} />
      <Col md={16}>
        {!pokemones ? (
          <Spin
            tip="Cargando Pokemones"
            style={{ textAlign: "center", width: "100%", padding: "20px" }}
          />
        ) : (
          <PokemonesList pokemones={pokemones} />
        )}
      </Col>
      <Col md={4} />
    </Row>
  );
}
