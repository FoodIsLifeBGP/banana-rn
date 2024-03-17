import { Platform } from 'react-native';

import {
	ActivityAction,
	startActivityAsync,
} from 'expo-intent-launcher';
import { openURL } from 'expo-linking';

export default Platform.select({
	ios: async () => {
		await openURL('app-settings:');
	},
	android: async () => {
		const packageName = 'com.banana.app'; /* TODO: see if we need to update this pkg name */
		await startActivityAsync(
			ActivityAction.APPLICATION_DETAILS_SETTINGS,
			{ data: `package:${packageName}` },
		);
	},
	default: () => Promise.resolve(),
});
