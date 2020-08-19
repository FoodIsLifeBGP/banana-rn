import railsAxios from '@util/railsAxios';
import { getLocation } from '@state/actions/getLocation';


export const getDonationsForClient = async store => {
	const { jwt, user } = store.state;
	const endpoint = `/clients/${user.id}/get_donations`;
	const { longitude, latitude } = await getLocation(store);
	try {
		const response = await railsAxios(jwt).post(endpoint, {
			client_lat: latitude,
			client_long: longitude,
		});
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
