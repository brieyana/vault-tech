import axios from 'axios';

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    proxy: {
        protocol: process.env.REACT_APP_PROTOCOL,
        host: process.env.REACT_APP_HOST,
        port: process.env.REACT_APP_PORT,
      }
});
