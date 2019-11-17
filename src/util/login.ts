import railsAxios from './railsAxios';
import { AsyncStorage } from 'react-native';

export default async ({ email, password }) => {
	const response = await railsAxios.post('/donor_auth', JSON.stringify({
		donor: {
			email,
			password,
		},
	}));
	
	response.data && response.data.jwt
		? await AsyncStorage.setItem('jwt', response.data.jwt)
		: await AsyncStorage.removeItem('jwt');

	return response.request.status || 'Error';
};
