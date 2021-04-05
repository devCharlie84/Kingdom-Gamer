import { BASE_PATH, API_VERSION } from "./config";

export function signUpApi(data) {
  const url = `${BASE_PATH}/${API_VERSION}/sign-up`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.user) {
        return {
          isSuccess: true,
          message: "Usuario creado exitosamente!",
        };
      } else {
        return {
          isSuccess: false,
          message: result.message,
        };
      }
    })
    .catch((error) => {
      return {
        isSuccess: false,
        message: error.message,
      };
    });
}

export function signInApi(data) {
  const url = `${BASE_PATH}/${API_VERSION}/sign-in`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
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
      return error.message;
    });
}

export function getUsersApi(token) {
  const url = `${BASE_PATH}/${API_VERSION}/users`;
  const params = {
    method: "GET",
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
      return error.message;
    });
}

export function getUsersActiveApi(token, status) {
  const url = `${BASE_PATH}/${API_VERSION}/users-active?active=${status}`;
  const params = {
    method: "GET",
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
      return error.message;
    });
}

export function uploadAvatarApi(token, avatar, userId) {
  const url = `${BASE_PATH}/${API_VERSION}/upload-avatar/${userId}`;

  const formData = new FormData();
  formData.append("avatar", avatar, avatar.name);

  const params = {
    method: "PUT",
    body: formData,
    headers: {
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
      return error.message;
    });
}

export function getAvatarApi(avatarName) {
  const url = `${BASE_PATH}/${API_VERSION}/get-avatar/${avatarName}`;

  return fetch(url)
    .then((response) => {
      return response.url;
    })
    .catch((error) => {
      return error.message;
    });
}

export function updateUserApi(token, user, userId) {
  const url = `${BASE_PATH}/${API_VERSION}/update-user/${userId}`;
  const params = {
    method: "PUT",
    body: JSON.stringify(user),
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
      return error.message;
    });
}

export function activateUserApi(token, userId, status) {
  const url = `${BASE_PATH}/${API_VERSION}/activate-user/${userId}`;
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
      return result;
    })
    .catch((error) => {
      return error.message;
    });
}

export function deleteUserApi(token, userId) {
  const url = `${BASE_PATH}/${API_VERSION}/delete-user/${userId}`;
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

export function signUpAdminApi(token, data) {
  const url = `${BASE_PATH}/${API_VERSION}/sign-up-admin`;
  const params = {
    method: "POST",
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
      return result;
    })
    .catch((error) => {
      return error.message;
    });
}
