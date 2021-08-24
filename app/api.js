import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
});

instance.interceptors.request.use(
  model => {
    const interceptor = model;
    interceptor.params = {
      apikey: '',
    };
    return interceptor;
  },
  error => Promise.reject(error),
);
const api = {
  getCharacters: () =>
    instance.get(`/characters`).then(response => response.data),
};

export default api;
