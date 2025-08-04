import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // backend port
  withCredentials: true,                // for sending token
});

export default instance;
