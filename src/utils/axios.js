import axios from 'axios';

const defaultOptions = {
    baseURL: 'https://channels.so-mas.net/',
    headers: {
        'Content-Type': 'application/json'
    }
};

export const client = axios.create(defaultOptions);
export default client;
