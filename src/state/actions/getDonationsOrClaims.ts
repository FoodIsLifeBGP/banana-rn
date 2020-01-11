import railsAxios from '@util/railsAxios';

export const getDonationsOrClaims = async store => {
	const { jwt, user, userIdentity } = store.state;
	const route = userIdentity === 'donor' ? 'get_donations' : 'get_claims';
	const endpoint = `/${userIdentity}s/${user.id}/${route}`;
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
