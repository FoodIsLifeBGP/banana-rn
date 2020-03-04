import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from 'react-navigation-hooks'
import useGlobal from '@state';
import styles from './ClientDonationDetailScreen.styles'


const ClientDonationDetailScreen = () => {
	const navigate = useNavigation()
	const [ state, action ] = useGlobal() as any;
	const { userIdentity } = state;
	const { params } = navigate.state
	const {
		canceled,
		created_at,
		donor_id,
		duration_minutes,
		food_name,
		id,
		image_url,
		measurement,
		per_person,
		pickup_location,
		total_servings,
		updated_at
	} = params.donation
	console.log('this is params...', params)
	const { donation } = route.params;
	console.log('this is donation..', donation)
	return (
		<View style={styles.outerContainer}>
			<View style={styles.card}>

			<Text>Hello from Client Donation Detail Screen</Text>
			</View>
		</View>
	);
};

export default ClientDonationDetailScreen;