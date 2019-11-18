import railsAxiosAuth from './railsAxiosAuth';

export default ({ jwt, id }) => {
	return railsAxiosAuth(jwt).get(`/donors/${id}/donations`)
		.then( response => {
			return response && response.data;
		})
		.catch(error => console.log(error));
};
