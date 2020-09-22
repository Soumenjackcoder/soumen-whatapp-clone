import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://whatapp-api.herokuapp.com',
});

export default instance;
