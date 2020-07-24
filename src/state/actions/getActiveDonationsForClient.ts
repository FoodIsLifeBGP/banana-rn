import railsAxios from '@util/railsAxios';

export const getActiveDonationsForClient = async store => {
	const { jwt } = store.state;
	const endpoint = '/donations/active';
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
