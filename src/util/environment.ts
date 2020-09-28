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
		API_BASE_URL: getServerEndPoint(),
	});
};

const getServerEndPoint = () => {
	if (Constants.manifest.extra.productionBuild) {
		return 'https://api.bananaapp.org';
	}
	return Constants.manifest.extra.ipAddress ? `http://${Constants.manifest.extra.ipAddress}:3000`
		: 'https://dev.bananaapp.org';
};
export default getEnv;
