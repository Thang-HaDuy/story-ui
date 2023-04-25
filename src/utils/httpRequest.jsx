import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;
