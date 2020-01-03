import { AsyncStorage } from 'react-native';
import getEnv from '@util/environment';
import railsAxios from './railsAxios';

export default async ({ email, password }) => {
	const { LOGIN_URL, USER_IDENTITY } = getEnv();
	return (
		railsAxios().post(LOGIN_URL, JSON.stringify({
			[USER_IDENTITY]: { email, password },
		})).then(async response => {
			const stored = response.data && response.data.jwt
				? await AsyncStorage.multiSet([ [ 'jwt', response.data.jwt ], [ 'user', response.data[USER_IDENTITY] ] ])
				: await AsyncStorage.multiRemove([ 'jwt', 'user' ]);
			console.log('here')
			const user = await AsyncStorage.getItem('user')
			console.log({user})
			return response.request.status;
		}).catch(error => {
			const e = error.toString().toLowerCase().split(' status code ');
			return e.length > 1
				? parseInt(e.slice(-1), 10)
				: 418;
		})
	);
};
