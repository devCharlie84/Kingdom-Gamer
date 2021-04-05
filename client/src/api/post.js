import { BASE_PATH, API_VERSION } from "./config";

export function getPostsApi(limit, page) {
  const url = `${BASE_PATH}/${API_VERSION}/get-posts?limit=${limit}&page=${page}`;

  return fetch(url)
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

export function deletePostApi(token, id) {
  const url = `${BASE_PATH}/${API_VERSION}/delete-post/${id}`;

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

export function addPostApi(token, post) {
  const url = `${BASE_PATH}/${API_VERSION}/add-post`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(post),
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

export function updatePostApi(token, id, data) {
  const url = `${BASE_PATH}/${API_VERSION}/update-post/${id}`;

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

export function getPostApi(urlPost) {
  const url = `${BASE_PATH}/${API_VERSION}/get-post/${urlPost}`;

  return fetch(url)
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
