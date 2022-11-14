import { useState } from "react";

function useFetch() {
  const base_url = "http://localhost:5000";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * GET : une seule ressrouce*/
  const get = (resource, id) => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      fetch(`${base_url}/${resource}/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
          setLoading(false);
          resolve(data);
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });
  };

  /**
   * GET : liste des ressrouces*/
  const list = (resource) => {
    return new Promise((resolve, reject) => {
      fetch(`${base_url}/${resource}`)
        .then((resp) => resp.json())
        .then((data) => {
          setLoading(false);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  /**
   * POST : Créer une seule ressrouce
   */
  const post = (resource, body) => {
    return new Promise((resolve, reject) => {
      fetch(`${base_url}/${resource}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setLoading(false);
          setError(null);
          resolve(data);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
          reject(error);
        });
    });
  };

  /* PUT : Modifier une seule ressrouce*/
  const update = (resource, id, body) => {
    return new Promise((resolve, reject) => {
      fetch(`${base_url}/${resource}/${id}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setLoading(false);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  /**
   * DELETE : Suppirmer une seule ressrouce*/
  const remove = (resource, id) => {
    return new Promise((resolve, reject) => {
      fetch(`${base_url}/${resource}/${id}`, {
        method: "DELETE",
      })
        .then((resp) => resp.json())
        .then((data) => {
          setLoading(false);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  return {
    get,
    list,
    post,
    update,
    remove,
    loading,
    error,
  };
}

export default useFetch;
