import React, { useState, useEffect } from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Button from "antd/lib/button";
import Card from "antd/lib/card";
import notification from "antd/lib/notification";
import {
  getPokemonDataPokeApiID,
  getPokemonDataPokeApiName,
} from "../../../api/pokemon";

import "./PokemonesList.scss";

export default function PokemonesList(props) {
  const { pokemones } = props;
  return (
    <div className="pokemones-list">
      <Row>
        {pokemones.map((pokemon) => (
          <Col md={8} key={pokemon._id} className="pokemones-list__pokemon">
            <Pokemon pokemon={pokemon} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

function Pokemon(props) {
  const { pokemon } = props;

  const [pokemonInfo, setPokemonInfo] = useState({});
  const [pokemonSprite, setPokemonSprite] = useState({});
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonWeight, setPokemonWeight] = useState(null);
  const [pokemonHeight, setPokemonHeight] = useState(null);
  const [pokemonSpriteShiny, setPokemonSpriteShiny] = useState({});
  const [urlPokemon, setUrlPokemon] = useState("");

  const { Meta } = Card;

  useEffect(() => {
    if (typeof (pokemon.idPokemon === "number")) {
      getPokemonDataPokeApiID(pokemon.idPokemon)
        .then((response) => {
          if (response?.code !== 200) {
            // notification["warning"]({ message: response.message });
          } else {
            setPokemonInfo(response.data);
            setPokemonSprite(response.data.sprites.front_default);
            setPokemonSpriteShiny(response.data.sprites.front_shiny);
            setPokemonType(response.data.types[0].type.name);
            setPokemonWeight(response.data.weight * 0.220462);
            setPokemonHeight(response.data.height * 0.1);
            mountUrl(response.data.name);
            // console.log(pokemonInfo);
          }
        })
        .catch((error) => {
          notification["error"]({ message: error.message });
        });
    } else {
      getPokemonDataPokeApiName(pokemon.idPokemon)
        .then((response) => {
          if (response?.code !== 200) {
            notification["warning"]({ message: response.message });
          } else {
            setPokemonInfo(response.data);
            setPokemonSprite(response.data.sprites.front_default);
            setPokemonSpriteShiny(response.data.sprites.front_shiny);
            setPokemonType(response.data.types[0].type.name);
            setPokemonWeight(response.data.weight * 0.220462);
            setPokemonHeight(response.data.height * 0.1);
            mountUrl(response.data.name);
            // console.log(pokemonInfo);
          }
        })
        .catch((error) => {
          notification["error"]({ message: error.message });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon]);

  const mountUrl = (name) => {
    const baseUrl = `https://www.pokemon.com/el/pokedex/${name}`;
    setUrlPokemon(baseUrl);
  };

  function cualquier() {
    if (pokemonWeight === null) {
      return null;
    } else {
      return (
        <a href={urlPokemon} target="_blank" rel="noopener noreferrer">
          <Card cover={<img src={pokemonSprite} alt={pokemonInfo.name} />}>
            <span style={{ color: "#000", fontSize: "16px" }}>
              {`N.º${pokemon.idPokemon}`}
            </span>
            <Meta
              title={pokemonInfo.name}
              description={
                pokemon.apodo ? `Apodo: ${pokemon.apodo}` : `Sin apodo`
              }
            />
            <hr></hr>
            <span style={{ color: "#000", fontSize: "16px" }}>
              {`Tipo: ${pokemonType}`}
            </span>
            <hr></hr>
            <span style={{ color: "#000", fontSize: "16px" }}>
              {`Altura: ${roundToTwo(pokemonHeight)} metros`}
            </span>
            <hr></hr>
            <span style={{ color: "#000", fontSize: "16px" }}>
              {`Peso: ${roundToTwo(pokemonWeight)} libras`}
            </span>
            <hr></hr>
            <span style={{ color: "#000", fontSize: "16px" }}>
              Versión Shiny:{" "}
              <img src={pokemonSpriteShiny} alt={pokemonInfo.name} />
            </span>

            <Button>Ver información del Pokemon</Button>
            <div className="pokemones-list__pokemon-footer"></div>
          </Card>
        </a>
      );
    }
  }

  return (
    <>{cualquier()}</>
    // <a href={urlPokemon} target="_blank" rel="noopener noreferrer">
    //   <Card cover={<img src={pokemonSprite} alt={pokemonInfo.name} />}>
    //     <span style={{ color: "#000", fontSize: "16px" }}>
    //       {`N.º${pokemon.idPokemon}`}
    //     </span>
    //     <Meta
    //       title={pokemonInfo.name}
    //       description={pokemon.apodo ? `Apodo: ${pokemon.apodo}` : `Sin apodo`}
    //     />
    //     <hr></hr>
    //     <span style={{ color: "#000", fontSize: "16px" }}>
    //       {`Tipo: ${pokemonType}`}
    //     </span>
    //     <hr></hr>
    //     <span style={{ color: "#000", fontSize: "16px" }}>
    //       {`Altura: ${roundToTwo(pokemonHeight)} metros`}
    //     </span>
    //     <hr></hr>
    //     <span style={{ color: "#000", fontSize: "16px" }}>
    //       {`Peso: ${roundToTwo(pokemonWeight)} libras`}
    //     </span>
    //     <hr></hr>
    //     <span style={{ color: "#000", fontSize: "16px" }}>
    //       Versión Shiny: <img src={pokemonSpriteShiny} alt={pokemonInfo.name} />
    //     </span>

    //     <Button>Ver información del Pokemon</Button>
    //     <div className="pokemones-list__pokemon-footer"></div>
    //   </Card>
    // </a>
  );

  function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
  }
}
