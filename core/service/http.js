const axios = require('axios')
//import { getAccessToken } from 'core/utils';

const httpClient = axios.create({
    baseURL: 'https://xxxxxxxxxx/',
    timeout: 30000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

httpClient.interceptors.request.use(
    (config) => {
        /*const { accessToken } = getAccessToken();
        if (accessToken) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${accessToken}`,
            };
            return config;
        }*/
        return config;
    },
    (error) => {
        return Promise.reject(error.response.data);
    },
);

httpClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error.response.data);
    },
);
module.exports = httpClient;
//export default httpClient;
