import railsAxios from '@util/railsAxios';

export const getActiveDonationsForClient = async store => {
	const { jwt, user } = store.state;
	if (!user.coords) {
		return [];
	}
	// leaving this around for a bit as we start to work through location testing and issues
	console.log(`Here's the user coords ${JSON.stringify(user.coords)}`);
	const endpoint = `/donations/active?client_lat=${user.coords.latitude}&client_long=${user.coords.longitude}`;
	try {
		const response = await railsAxios(jwt).get(endpoint);
		const { data } = response;
		const sortedData = data.sort((a, b) => a.created_at < b.created_at);
		if (sortedData) {
			const activeDonations = sortedData.filter(donation => donation.status === 'active');
			await store.setState({ donationsOrClaims: activeDonations });
			return sortedData;
		}
	} catch (error) {
		console.log(error);
	}
	await store.setState({ donationsOrClaims: [] });
	return [];
};
