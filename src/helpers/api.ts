import axios from 'axios';
import { getAccessToken } from './token.ts';

const { VITE_API_BASE_URL = 'http://localhost:3000' } = import.meta.env;

export const requestApi = async (path: string, data = {}, method: string = 'GET') => {
	const response = await axios({
		url: `${VITE_API_BASE_URL}${path}`,
		...(method.toUpperCase() === 'GET' ? { params: data } : { data }),
		method,
		headers: {
			Authorization: `Bearer ${getAccessToken()}`,
		},
	});
	return response.data;
};

export default requestApi;
