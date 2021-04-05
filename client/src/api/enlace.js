import { BASE_PATH, API_VERSION } from "./config";

export function getEnlaceApi() {
  const url = `${BASE_PATH}/${API_VERSION}/get-enlaces`;

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

export function updateEnlaceApi(token, enlaceId, data) {
  const url = `${BASE_PATH}/${API_VERSION}/update-enlace/${enlaceId}`;

  const params = {
    method: "PUT",
    body: JSON.stringify(data),
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
      return result.message;
    })
    .catch((error) => {
      return error.message;
    });
}

export function activateEnlaceApi(token, enlaceId, status) {
  const url = `${BASE_PATH}/${API_VERSION}/activate-enlace/${enlaceId}`;

  const params = {
    method: "PUT",
    body: JSON.stringify({ active: status }),
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
      return result.message;
    })
    .catch((error) => {
      return error.message;
    });
}

export function addEnlaceApi(token, enlace) {
  const url = `${BASE_PATH}/${API_VERSION}/add-enlace`;

  const params = {
    method: "POST",
    body: JSON.stringify(enlace),
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
      return result.message;
    })
    .catch((error) => {
      return error.message;
    });
}

export function deleteEnlaceApi(token, enlaceId) {
  const url = `${BASE_PATH}/${API_VERSION}/delete-enlace/${enlaceId}`;

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
      return result.message;
    })
    .catch((error) => {
      return error.message;
    });
}
