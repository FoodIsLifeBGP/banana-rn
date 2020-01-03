import railsAxios from './railsAxios';

export default ({ jwt, id }) => (
	railsAxios(jwt).get(`/donors/${id}/donations`)
		.then(response => response && response.data)
		.catch(error => console.log(error))
);
