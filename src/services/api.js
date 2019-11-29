import axios from 'axios';

const api = axios.create({
  baseURL: 'https://falasindico.com/admin/json/',
});

export default api;
