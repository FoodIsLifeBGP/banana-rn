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
		console.log('ip='+Constants.manifest.extra.ipAddress);
	return ({
		...variantSpecificProperties,
		USER_IDENTITY: variant,
		API_BASE_URL: Constants.manifest.extra.ipAddress ? `http://${Constants.manifest.extra.ipAddress}:3000` : 'http://ec2-54-167-200-156.compute-1.amazonaws.com:3000',
		//API_BASE_URL: Constants.manifest.extra.ipAddress ? `http://192.168.1.8:3000` : 'http://ec2-54-167-200-156.compute-1.amazonaws.com:3000',
	});
};

export default getEnv;
