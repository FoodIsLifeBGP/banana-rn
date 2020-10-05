export default ({ config }) => {
	require('dotenv').config();
	return {
		...config,
		extra: {
			ipAddress: process.env.EXPO_IP_ADDRESS,
			variant: process.env.EXPO_APP_VARIANT ? process.env.EXPO_APP_VARIANT : 'donor',
			storybook: process.env.EXPO_STORYBOOK ? process.env.EXPO_STORYBOOK === 'true' : false,
			useDefaultLocation: process.env.EXPO_USE_DEFAULT_LOCATION ? process.env.EXPO_USE_DEFAULT_LOCATION === 'true' : false,
			productionBuild: false,
		},
	};
};
