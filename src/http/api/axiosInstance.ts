import axios from "axios";

const endpoint = 'http://localhost:8080/api/v1/users/';

const axiosInstance = axios.create({
    baseURL: endpoint,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    timeout: 1500,

});

export default axiosInstance;