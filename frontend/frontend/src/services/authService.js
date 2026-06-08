import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";

export const registerUsuario = (usuario) => {
  return axios.post(`${API_URL}/register`, usuario);
};

export const loginUsuario = (usuario) => {
  return axios.post(`${API_URL}/login`, usuario);
};
