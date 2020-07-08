import Constants from 'expo-constants';

const DONOR = {
	LOGIN_URL: '/donor_auth',
	CREATE_URL: '/donors/create',
};

const CLIENT = {
	LOGIN_URL: '/client_auth',
	CREATE_URL: '/clients/create',
};

const getEnv = () => {
	const { variant } = Constants.manifest.extra;
	const variantSpecificProperties = variant === 'donor'
		? DONOR
		: CLIENT;
	return ({
		...variantSpecificProperties,
		USER_IDENTITY: variant,
		API_BASE_URL: __DEV__ ? 'http://localhost:3000' : 'https://banana-rails.herokuapp.com',
	});
};

export default getEnv;
