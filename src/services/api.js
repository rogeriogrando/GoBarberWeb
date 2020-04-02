import axios from 'axios';

const api = axios.create({
  baseURL: 'http://159.89.52.31'
});

export default api;
