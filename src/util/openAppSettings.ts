import { Platform } from 'react-native';
import Constants from 'expo-constants';
import { startActivityAsync, ACTION_APPLICATION_DETAILS_SETTINGS } from 'expo-intent-launcher';
import { openURL } from 'expo-linking';

export default Platform.select({
	ios: async () => {
		await openURL('app-settings:');
	},
	android: async () => {
		const packageName = Constants.appOwnership === 'standalone'
			? Constants.manifest.android.packageName
			: 'host.exp.exponent';
		await startActivityAsync(ACTION_APPLICATION_DETAILS_SETTINGS,
			{
				data: 'package:' + packageName,
			});
	},
	default: () => Promise.resolve(),
});
