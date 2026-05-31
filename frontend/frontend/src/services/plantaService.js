import axios from "axios";

const API_URL = "http://localhost:3000/api/plantas";

export const obtenerPlantas = () => {
  return axios.get(API_URL);
};

export const crearPlanta = (planta) => {
  return axios.post(API_URL, planta);
};

export const eliminarPlanta = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const actualizarPlanta = (id, planta) => {
  return axios.put(`${API_URL}/${id}`, planta);
};

export const obtenerPlantaPorId = (id) => {
  return axios.get(`${API_URL}/${id}`);
};
