import railsAxios from '@util/railsAxios';

export const getDonationHistory = async store => {
	const { jwt, user } = store.state;
	const endpoint = `/donations/${user.id}/history_donations`;

	try {
		const response = await railsAxios(jwt).get(endpoint);
		const { data } = response;
		if (data) return data;
	} catch (error) {
		console.log(error);
	}
	return [];
};
