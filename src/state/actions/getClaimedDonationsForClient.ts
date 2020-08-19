import railsAxios from '@util/railsAxios';

export const getClaimedDonationsForClient = async store => {
	const { jwt, user } = store.state;
	const endpoint = `/clients/${user.id}/get_claims?client_lat=${user.coords.latitude}&client_long=${user.coords.longitude}`;
	try {
		const response = await railsAxios(jwt).get(endpoint);
		const { data } = response;
		const sortedData = data.sort((a, b) => a.created_at < b.created_at);
		if (sortedData) {
			await store.setState({ donationsOrClaims: sortedData });
			return sortedData;
		}
		return false;
	} catch (error) {
		console.log(error);
		await store.setState({ donationsOrClaims: [] });
		return false;
	}
};
