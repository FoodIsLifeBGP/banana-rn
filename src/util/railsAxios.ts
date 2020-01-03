import axios from 'axios';
import getEnv from './environment';

export default (jwt?: string) => {
	const BASIC_HEADERS = {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	};
	const AUTH_HEADER = {
		Authorization: `Bearer ${jwt}`,
	};
	const { API_BASE_URL } = getEnv();
	return axios.create({
		headers: jwt
			? { ...BASIC_HEADERS, ...AUTH_HEADER }
			: { ...BASIC_HEADERS },
		baseURL: API_BASE_URL,
	});
};
