import React from 'react';
import { Text } from 'react-native';
import InfoScreen from '../InfoScreen';
import styles from './AccountSuspendedScreen.styles';

export default () => (
	<InfoScreen
		title="Your account has been suspended."
		nextScreenTitle="Contact Us"
		nextScreenDestination="ContactScreen"
	>
		<Text style={styles.documentText}>
			We have temporarily suspended this account while we investigate.  Thanks for your understanding.
		</Text>
	</InfoScreen>
);
