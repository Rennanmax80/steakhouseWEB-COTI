import axios from 'axios';

export const getApiUrl = () => {
  return "http://apirestaurante-001-site1.itempurl.com";
}

// retorna os dados do restaurante
export const getDadosRestaurante = () => {
  return axios.get(getApiUrl() + "/api/restaurante")
  .then(response => { return response.data; }) //retorna promisse da chamada http
}

export const getDadosCardapio = () => {
  return axios.get(getApiUrl() + "/api/cardapio")
  .then(response => { return response.data; }) //retorna promisse da chamada http
}



