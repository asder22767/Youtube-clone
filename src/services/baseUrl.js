import axios from 'axios';

export const BASE_URL = 'https://63d3e856a93a149755b5c8f1.mockapi.io/';

export const instance = axios.create({
	baseURL: BASE_URL,
	timeout: 1000,
	// headers: { 'X-Custom-Header': 'foobar' },
});
