import Constants from 'expo-constants';

const DONOR = {
	LOGIN_URL: '/donor_auth',
};

const CLIENT = {
	LOGIN_URL: '/client_auth',
};

const getEnv = () => {
	const { variant } = Constants.manifest.extra;
	const variantSpecificProperties = variant === 'donor'
		? DONOR
		: CLIENT;
	return ({
		...variantSpecificProperties,
		USER_IDENTITY: variant,
		API_BASE_URL: 'http://localhost:3000',
	});
};

export default getEnv;
