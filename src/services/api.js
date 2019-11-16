import axios from 'axios';

const api = axios.create({
  baseURL: 'http://falasindico.com/admin/json/',
});

export default api;
