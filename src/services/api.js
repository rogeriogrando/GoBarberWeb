import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gobarber.devjones.com.br'
});

export default api;
