import axios from "axios";
const url = "https://jo7e1986.github.io/videos";

export const getVideosRequest = () => {
  return axios(url);
};

export const getVideoRequest = (id) => {
  return axios(`${url}/${id}`);
};

export const createVideoRequest = (video) => {
  return axios.post(url, video);
};

export const updateVideoRequest = (id, video) => {
  return axios.put(`${url}/${id}`, video);
};

export const deleteVideoRequest = (id) => {
  return axios.delete(`${url}/${id}`);
};
