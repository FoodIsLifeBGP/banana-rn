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
	console.log('testing donation import...', food_name)
	return (
		<View style={styles.outerContainer}>
			<View style={styles.card}>
			<Text>Image Here</Text>
			</View>
			<View style={styles.card}>
			<Text>Specs</Text>
			</View>
			<View style={styles.card}>
			<Text>Pick Up Info</Text>
			</View>
			<View style={styles.card}>
			<Text>Navigation Info</Text>
			</View>
			<View style={styles.card}>
			<Text>Claim / Cancel Buttons</Text>
			</View>
		</View>
	);
};

export default ClientDonationDetailScreen;