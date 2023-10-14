import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://5394192439.for-seoul.synctreengine.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
