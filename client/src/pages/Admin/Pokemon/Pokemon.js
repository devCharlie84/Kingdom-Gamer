import React, { useState, useEffect } from "react";
import { getPokemonesApi } from "../../../api/pokemon";
import PokemonesList from "../../../components/Admin/Pokemon/PokemonList";
import notification from "antd/lib/notification";

import "./Pokemon.scss";

export default function Pokemon() {
  const [pokemones, setPokemones] = useState([]);
  const [reloadPokemones, setReloadPokemones] = useState(false);

  useEffect(() => {
    getPokemonesApi()
      .then((response) => {
        if (response?.code !== 200) {
          notification["warning"]({
            message: response.message,
          });
        } else {
          setPokemones(response.pokemones);
        }
      })
      .catch((error) => {
        notification["error"]({
          message: error.message,
        });
      });
    setReloadPokemones(false);
  }, [reloadPokemones]);

  return (
    <div className="pokemones">
      <PokemonesList
        pokemones={pokemones}
        setReloadPokemones={setReloadPokemones}
      />
    </div>
  );
}
