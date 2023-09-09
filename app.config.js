import donorConfig from './app.donor.json';
import clientConfig from './app.client.json';

export default ({ config }) => {
	require('dotenv').config();

	const dynamicConfig = {
		extra: {
			ipAddress: process.env.EXPO_IP_ADDRESS,
			// variant: process.env.EXPO_PUBLIC_APP_VARIANT ? process.env.EXPO_PUBLIC_APP_VARIANT : 'donor',
			variant: 'client',
			storybook: process.env.EXPO_STORYBOOK ? process.env.EXPO_STORYBOOK === 'true' : false,
			useDefaultLocation: process.env.EXPO_USE_DEFAULT_LOCATION
				? process.env.EXPO_USE_DEFAULT_LOCATION === 'true' : false,
			productionBuild: true,
		},
	};

	// Merge teh configurations
	return {
		...config,
		// ...donorConfig.expo,
		...clientConfig.expo,
		...dynamicConfig,
		extra: {
			...config.extra,
			// ...donorConfig.expo.extra,
			...clientConfig.expo.extra,
			...dynamicConfig.extra,
		},
	};
};
