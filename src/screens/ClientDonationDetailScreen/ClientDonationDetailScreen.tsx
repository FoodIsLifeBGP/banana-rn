import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from 'react-navigation-hooks'
import useGlobal from '@state';
import styles from './ClientDonationDetailScreen.styles'


const ClientDonationDetailScreen = () => {
	const [ state, action ] = useGlobal() as any;
	const { userIdentity } = state;
	const { navigate } = useNavigation();
	console.log(navigate)
	// const { route } = navigate;
	// const donation = route.params.donation
	// console.log(donation)
	return (
		<View style={styles.outerContainer}>
			<View style={styles.card}>

			<Text>Hello from Client Donation Detail Screen</Text>
			</View>
		</View>
	);
};

export default ClientDonationDetailScreen;