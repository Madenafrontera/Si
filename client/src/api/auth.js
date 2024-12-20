import axios from './axios';

export const registerRequest = user => {
  return axios.post(`/register`, user, {
    headers: {
      'Content-Type': 'application/json',  // Asegúrate de que el contenido sea JSON
    },
  });
};

export const loginRequest = user => {
  return axios.post(`/login`, user, {
    headers: {
      'Content-Type': 'application/json',  // Asegúrate de que el contenido sea JSON
    },
  });
};

export const verifyTokenRequest = async () => axios.get(`/verify`);
