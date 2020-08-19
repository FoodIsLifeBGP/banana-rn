import railsAxios from '@util/railsAxios';

export const getClaimHistoryForClient = async store => {
	const { jwt, user } = store.state;
	const endpoint = `/clients/${user.id}/claims_history`;
	try {
		const response = await railsAxios(jwt).get(endpoint);
		const { data } = response;
		const sortedData = data.sort((a, b) => a.created_at < b.created_at);
		if (sortedData) {
			await store.setState({ claimHistory: sortedData });
			return sortedData;
		}
		return false;
	} catch (error) {
		console.log(error);
		await store.setState({ claimHistory: [] });
		return false;
	}
};
