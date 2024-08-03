import axios from 'axios';

const api = axios.create({
  baseURL: 'https://agenda-maker.onrender.com/'
});

export default api;
