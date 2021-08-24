import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
});

instance.interceptors.request.use(
  model => {
    const interceptor = model;
    interceptor.params = {
      apikey: '482119ad957e5be061d5b3d2181844a3',
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
