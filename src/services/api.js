import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://mock-api.driven.com.br/api/v8/cineflex'
});