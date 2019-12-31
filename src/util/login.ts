import { AsyncStorage } from 'react-native';
import railsAxios from './railsAxios';

export default async ({ email, password }) => (
	railsAxios.post('/donor_auth', JSON.stringify({
		donor: { email, password },
	})).then(response => {
		response.data && response.data.jwt
			? AsyncStorage.multiSet([ [ 'jwt', response.data.jwt ], [ 'donor', JSON.stringify(response.data.donor) ] ])
			: AsyncStorage.multiRemove([ 'jwt', 'donor' ]);
		return response.request.status;
	}).catch(error => {
		const e = error.toString().toLowerCase().split(' status code ');
		return e.length > 1
			? parseInt(e.slice(-1), 10)
			: 418;
	})
);
