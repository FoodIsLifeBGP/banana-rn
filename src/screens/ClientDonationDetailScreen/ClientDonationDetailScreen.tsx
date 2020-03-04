import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from 'react-navigation-hooks'
import styles from './ClientDonationDetailScreen.styles'
import { TouchableOpacity } from 'react-native-gesture-handler';


const ClientDonationDetailScreen = () => {
	const navigate = useNavigation()
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

	return (
		<ScrollView style={styles.outerContainer}>
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
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.cancelButton}>
					<Text>CANCEL</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.claimButton}>
					<Text>CLAIM</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default ClientDonationDetailScreen;