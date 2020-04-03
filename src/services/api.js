import axios from 'axios';

const api = axios.create({
  baseURL: 'http://gobarber.devjones.com.br'
});

export default api;
