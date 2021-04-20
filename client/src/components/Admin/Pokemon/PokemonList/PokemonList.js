import React, { useState, useEffect } from "react";
import List from "antd/es/list";
import Button from "antd/lib/button";
import notification from "antd/lib/notification";
import Modal from "antd/lib/modal";
import ModalComponent from "../../../../components/Modal";
import DragSortableList from "react-drag-sortable";
import {
  getPokemonDataPokeApiID,
  deletePokemonApi,
  updatePokemonApi,
} from "../../../../api/pokemon";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { getAccessTokenApi } from "../../../../api/auth";
import AddEditPokemonForm from "../AddEditPokemonForm";

import "./PokemonList.scss";

const { confirm } = Modal;

export default function PokemonList(props) {
  const { pokemones, setReloadPokemones } = props;

  const [listPokemones, setListPokemones] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModelContent] = useState(null);

  useEffect(() => {
    const listPokemonesArray = [];
    pokemones.forEach((pokemon) => {
      listPokemonesArray.push({
        content: (
          <Pokemon
            pokemon={pokemon}
            deletePokemon={deletePokemon}
            editPokemonModal={editPokemonModal}
          />
        ),
      });
    });
    setListPokemones(listPokemonesArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemones]);

  const onSort = (sortedList, dropEvent) => {
    const token = getAccessTokenApi();

    sortedList.forEach((item) => {
      const { _id } = item.content.props.pokemon;
      const order = item.rank;
      updatePokemonApi(token, _id, { order });
    });
  };

  const addPokemonModal = () => {
    setIsVisibleModal(true);
    setModalTitle("Creación de Pokemon");
    setModelContent(
      <AddEditPokemonForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadPokemones={setReloadPokemones}
      />
    );
  };

  const editPokemonModal = (pokemon) => {
    setIsVisibleModal(true);
    setModalTitle(`Editando Pokemon ${pokemon.idPokemon}`);
    setModelContent(
      <AddEditPokemonForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadPokemones={setReloadPokemones}
        pokemon={pokemon}
      />
    );
  };

  const deletePokemon = (pokemon) => {
    const token = getAccessTokenApi();

    confirm({
      title: "Advertencia:",
      content: `Estas a punto de eliminar el Pokemon ID:${pokemon.idPokemon}.`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deletePokemonApi(token, pokemon._id)
          .then((response) => {
            const typeNotification =
              response.code === 200 ? "success" : "warning";
            notification[typeNotification]({
              message: response.message,
            });
            setReloadPokemones(true);
          })
          .catch((error) => {
            notification["error"]({
              message: error.message,
            });
          });
      },
    });
  };

  return (
    <div className="pokemones-list">
      <div className="pokemones-list__header">
        <Button type="primary" onClick={addPokemonModal}>
          Nuevo Pokemon
        </Button>
      </div>

      <div className="pokemones-list__items">
        {listPokemones.length === 0 && (
          <h2 style={{ textAlign: "center", margin: 0 }}>
            No tienes Pokemones creados
          </h2>
        )}
        <DragSortableList
          items={listPokemones}
          onSort={onSort}
          type="vertical"
        />
      </div>
      <ModalComponent
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      >
        {modalContent}
      </ModalComponent>
    </div>
  );
}

function Pokemon(props) {
  const { pokemon, deletePokemon, editPokemonModal } = props;
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    getPokemonDataPokeApiID(pokemon.idPokemon).then((response) => {
      if (response.code !== 200) {
        notification["warning"]({
          message: `El Pokemon con ID/Nombre ${pokemon.idPokemon} no se ha encontrado o es inválido.`,
        });
      }
      setPokemonData(response.data);
    });
  }, [pokemon]);

  if (!pokemonData) {
    return null;
  }

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => editPokemonModal(pokemon)}>
          <EditOutlined />
        </Button>,
        <Button type="danger" onClick={() => deletePokemon(pokemon)}>
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <img
        src={pokemonData.sprites.front_default}
        alt={pokemonData.name}
        style={{ width: "100px", marginRight: "20px" }}
      />

      <List.Item.Meta
        title={`${pokemonData.name} | N.º ${pokemonData.id}`}
        description={pokemonData.name}
      />
    </List.Item>
  );
}
