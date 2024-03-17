import axios, { AxiosInstance } from 'axios';
import getEnv from './environment';

const railsAxios = (jwt?: string): AxiosInstance => {
	const JSON_HEADERS = {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	};
	const AUTH_HEADER = jwt ? { Authorization: `Bearer ${jwt}` } : {};
	const { API_BASE_URL } = getEnv();

	return axios.create({
		headers: {
			...JSON_HEADERS,
			...AUTH_HEADER,
		},
		baseURL: API_BASE_URL,
	});
};

export default railsAxios;
