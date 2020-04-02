import axios from 'axios';

const api = axios.create({
  baseURL: 'http://159.89.52.31:3333'
});

export default api;
