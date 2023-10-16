import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SYNCTREE_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
