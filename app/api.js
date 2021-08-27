import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
});

instance.interceptors.request.use(
  model => {
    const interceptor = model;
    interceptor.params = {
      ...interceptor.params,
      apikey: '482119ad957e5be061d5b3d2181844a3',
    };
    return interceptor;
  },
  error => Promise.reject(error),
);
const api = {
  getCharacters: params =>
    instance.get(`/characters`, { params }).then(response => response.data),
  getCharacter: heroId =>
    instance.get(`/characters/${heroId}`).then(response => response.data),
};

export default api;
