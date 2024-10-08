import axios from "axios";
const url = "https://jo7e1986.github.io/categorias";

export const getCategoriasRequest = () => {
  return axios(url);
};

export const getCategoriaRequest = (id) => {
  return axios(`${url}/${id}`);
};

export const createCategoriaRequest = (categoria) => {
  return axios.post(url, categoria);
};

export const updateCategoriaRequest = (id, categoria) => {
  return axios.put(`${url}/${id}`, categoria);
};

export const deleteCategoriaRequest = (id) => {
  return axios.delete(`${url}/${id}`);
};
