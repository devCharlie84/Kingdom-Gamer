import React, { useState, useEffect } from "react";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import notification from "antd/lib/notification";
import { getAccessTokenApi } from "../../../../api/auth";
import {
  addPokemonApi,
  updatePokemonApi,
  getPokemonDataPokeApiID,
} from "../../../../api/pokemon";
import { KeyOutlined, FileTextOutlined } from "@ant-design/icons";

import "./AddEditPokemonForm.scss";

export default function AddEditPokemonForm(props) {
  const { setIsVisibleModal, setReloadPokemones, pokemon } = props;

  const [pokemonData, setPokemonData] = useState({});
  const [bandera, setBandera] = useState(false);

  useEffect(() => {
    if (pokemon) {
      setPokemonData(pokemon);
    } else {
      setPokemonData({});
    }
  }, [pokemon]);

  const addPokemon = (e) => {
    if (!pokemonData.idPokemon) {
      notification["error"]({
        message: "El ID del Pokemon es obligatorio",
      });
    } else {
      if (pokemonData.idPokemon > 898 || pokemonData.idPokemon < 0) {
        notification["error"]({
          message: "El Pokemon no existe",
        });
      } else {
        const token = getAccessTokenApi();

        getPokemonDataPokeApiID(pokemonData.idPokemon).then((response) => {
          if (!response.code === 200) {
            setBandera(true);
          }
        });

        if (bandera === false) {
          addPokemonApi(token, pokemonData)
            .then((response) => {
              const typeNotification =
                response.code === 200 ? "success" : "warning";
              notification[typeNotification]({
                message: response.message,
              });
              setIsVisibleModal(false);
              setReloadPokemones(true);
              setPokemonData({});
            })
            .catch((error) => {
              notification["error"]({
                message: error.message,
              });
            });
        }
      }
    }
  };

  const updatePokemon = (e) => {
    const token = getAccessTokenApi();

    updatePokemonApi(token, pokemon._id, pokemonData)
      .then((response) => {
        const typeNotification = response.code === 200 ? "success" : "warning";
        notification[typeNotification]({
          message: response.message,
        });
        setIsVisibleModal(false);
        setReloadPokemones(true);
        setPokemonData({});
      })
      .catch((error) => {
        notification["error"]({
          message: error.message,
        });
      });
  };

  return (
    <div className="add-edit-pokemon-form">
      <AddEditForm
        pokemon={pokemon}
        addPokemon={addPokemon}
        updatePokemon={updatePokemon}
        setPokemonData={setPokemonData}
        pokemonData={pokemonData}
      />
    </div>
  );
}

function AddEditForm(props) {
  const {
    pokemon,
    addPokemon,
    updatePokemon,
    setPokemonData,
    pokemonData,
  } = props;

  return (
    <Form
      className="form-add-edit"
      onFinish={pokemon ? updatePokemon : addPokemon}
    >
      <Form.Item>
        <Input
          prefix={<KeyOutlined />}
          placeholder="ID/Nombre del Pokemon"
          value={pokemonData.idPokemon}
          onChange={(e) =>
            setPokemonData({ ...pokemonData, idPokemon: e.target.value })
          }
          disabled={pokemon ? true : false}
        />
      </Form.Item>

      <Form.Item>
        <Input
          prefix={<FileTextOutlined />}
          placeholder="Alias del Pokemon"
          value={pokemonData.apodo}
          onChange={(e) =>
            setPokemonData({ ...pokemonData, apodo: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          {pokemon ? "Actualizar Pokemon" : "Crear Pokemon"}
        </Button>
      </Form.Item>
    </Form>
  );
}
