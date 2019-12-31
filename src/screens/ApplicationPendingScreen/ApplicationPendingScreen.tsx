import React from 'react';
import { Text } from 'react-native';
import InfoScreen from '../InfoScreen';
import styles from './ApplicationPendingScreen.styles';

export default () => (
	<InfoScreen
		title="Your application is being reviewed."
		nextScreenTitle="Contact Us"
		nextScreenDestination="ContactScreen"
	>
		<Text style={styles.documentText}>
			Please allow 24-48 hours for your registration to complete.  The app will open when your application is processed.
		</Text>
	</InfoScreen>
);

