import railsAxios from './railsAxios';

export default async ({ id, jwt }) => {
	const response = await railsAxios.post(`/donors/${id}/active`);

	return response.request.status || 'Error';
};
