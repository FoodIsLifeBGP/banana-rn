import axios from 'axios';

export default (jwt: string) => (
	axios.create({
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${jwt}`,
		},
		baseURL: 'http://localhost:3000',
	})
);
