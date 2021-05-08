import { BASE_PATH, API_VERSION } from "./config";

// export function getPokemonesPaginationApi(limit, page) {
//   const url = `${BASE_PATH}/${API_VERSION}/get-pokemones?limit=${limit}&page=${page}`;

//   return fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) => {
//       return result;
//     })
//     .catch((error) => {
//       return error.message;
//     });
// }

export function getPokemonesApi() {
  const url = `${BASE_PATH}/${API_VERSION}/get-pokemones`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error.message;
    });
}

export function getPokemonDataPokeApiID(id) {
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

  return fetch(baseUrl)
    .then(async (response) => {
      return { code: response.status, data: await response.json() };
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
}

export function getPokemonDataPokeApiName(name) {
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;

  return fetch(baseUrl)
    .then(async (response) => {
      return { code: response.status, data: await response.json() };
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
}

export function deletePokemonApi(token, id) {
  const url = `${BASE_PATH}/${API_VERSION}/delete-pokemon/${id}`;

  const params = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
}

export function addPokemonApi(token, pokemon) {
  const url = `${BASE_PATH}/${API_VERSION}/add-pokemon`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(pokemon),
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
}

export function updatePokemonApi(token, id, data) {
  const url = `${BASE_PATH}/${API_VERSION}/update-pokemon/${id}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
}
