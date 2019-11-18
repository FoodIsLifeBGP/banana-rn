import railsAxios from './railsAxios';
import { AsyncStorage } from 'react-native';

export default async ({ email, password }) => {
	return railsAxios.post('/donor_auth', JSON.stringify({
		donor: { email, password } })
	).then(response => {
		response.data && response.data.jwt
			? AsyncStorage.multiSet([['jwt', response.data.jwt], ['donor', JSON.stringify(response.data.donor)]])
			: AsyncStorage.multiRemove(['jwt', 'donor']);
		return response.request.status;
	}).catch (error => {
		const e = error.toString().toLowerCase().split(' status code ');
		return e.length > 1
			? parseInt(e.slice(-1))
			: 418;
	});
};
