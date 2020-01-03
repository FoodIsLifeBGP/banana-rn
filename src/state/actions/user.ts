import getEnv from '@util/environment';
import railsAxios from '@util/railsAxios';

export const login = async (store, { email, password }) => {
	const { LOGIN_URL, USER_IDENTITY } = getEnv();

	try {
		const response = await railsAxios().post(
			LOGIN_URL,
			JSON.stringify({ [USER_IDENTITY]: { email, password } }),
		);
		await store.setState({
			jwt: response.data?.jwt || '',
			user: response.data?.[USER_IDENTITY] || {},
		});
		return response.request.status;
	} catch (error) {
		const e = error.toString().toLowerCase().split(' status code ');
		return e.length > 1
			? parseInt(e.slice(-1), 10)
			: 418;
	}
};

export const logout = async store => {
	await store.setState({
		jwt: '',
		user: {},
	});
};
