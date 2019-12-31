import railsAxiosAuth from './railsAxiosAuth';

export default ({ jwt, id }) => (
	railsAxiosAuth(jwt).get(`/donors/${id}/donations`)
		.then(response => response && response.data)
		.catch(error => console.log(error))
);
