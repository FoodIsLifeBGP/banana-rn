import React from 'react';
import { View, Text } from 'react-native';
import useGlobal from '@state';
import styles from './ClientDonationDetailScreen.styles'


const ClientDonationDetailScreen = () => {
	const [ state, action ] = useGlobal() as any;
	const { userIdentity } = state;
	console.log(userIdentity)

	return (
		<View style={styles.outerContainer}>
			<View style={styles.card}>

			<Text>Hello from Client Donation Detail Screen</Text>
			</View>
		</View>
	);
};

export default ClientDonationDetailScreen;