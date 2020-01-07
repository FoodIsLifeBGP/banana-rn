import railsAxios from '@util/railsAxios';
import initialState from '@state/index';

export const logIn = async (store, { email, password }) => {
	const { loginUrl, userIdentity } = store.state;

	try {
		const response = await railsAxios().post(
			loginUrl,
			JSON.stringify({ [userIdentity]: { email, password } }),
		);
		await store.setState({
			jwt: response.data?.jwt || '',
			user: response.data?.[userIdentity] || {},
		});
		return response.request.status;
	} catch (error) {
		const e = error.toString().toLowerCase().split(' status code ');
		return e.length > 1
			? parseInt(e.slice(-1), 10)
			: 418;
	}
};

export const logOut = async store => {
	await store.setState(initialState);
};
