import railsAxios from '@util/railsAxios';

export const getActiveDonationsForClient = async store => {
	const { jwt, user: { id } } = store.state;
	const endpoint = `/clients/${id}/get_donations`;
	const { latitude, longitude } = await store.actions.getLocation() || store.state.user.coords;
	const location = JSON.stringify({ client_lat: latitude, client_long: longitude });
	if (latitude && longitude) {
		try {
			const response = await railsAxios(jwt).post(endpoint, location);
			const { data } = response;
			const sortedData = data.sort((a, b) => a.created_at < b.created_at);
			if (sortedData) {
				await store.setState({ donationsOrClaims: sortedData });
				return sortedData;
			}
		} catch (error) {
			console.log(error);
		}
	}
	await store.setState({ donationsOrClaims: [] });
	return [];
};
