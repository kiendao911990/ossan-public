const axios = require('axios')
const httpClient = axios.create({
    baseURL: 'https://api.simsimi.net/',
    timeout: 30000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});
httpClient.interceptors.request.use(
    (config) => {
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
async function getAnwser(key) {
    var result = await httpClient.get(`/v2/?text=${encodeURI(key)}&key=API-1234-abcd-1234-abcd&lc=vn`);
    if(result.status == 200 || result.status == 201)
        return result.data.success;
    else
        return null;
}

module.exports = {
    getAnwser,
};