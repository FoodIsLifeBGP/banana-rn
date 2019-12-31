import React from 'react';
import { Text } from 'react-native';
import setAccountToActive from '../../util/setAccountToActive';
import InfoScreen from '../InfoScreen';
import styles from './ApplicationPendingScreen.styles';

export default ({ id }: {id: string}) => {
	setAccountToActive({ id });

	return (
		<InfoScreen
			title="Your application is approved."
			nextScreenTitle="Next"
			nextScreenDestination="DashboardScreen"
		>
			<Text style={styles.documentText}>
				Welcome to The Banana App!  We are excited to have you here.
			</Text>
		</InfoScreen>
	);
};
