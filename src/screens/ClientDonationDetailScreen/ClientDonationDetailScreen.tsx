import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from 'react-navigation-hooks'
import styles from './ClientDonationDetailScreen.styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { stopLocationUpdatesAsync } from 'expo-location';

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
			<View style={styles.imageContainer}>
				<Text>Image Here</Text>
			</View>
			<View style={styles.card}>
				<Text style={styles.foodTitle}>{food_name}</Text>
				{/* get donor from donor id for below */}
				<Text style={styles.donorSubtitle}>FROM {donor_id}</Text>
				<Text style={styles.subtitle}>{total_servings} {measurement} · [INSERT DISTANCE]</Text>
			</View>
			<View style={styles.card}>
				<Text style={styles.sectionTitle}>PICK UP INFO</Text>
				<Text style={styles.addressText}>{pickup_location}</Text>
				<Text style={styles.descriptionText}>Pickup instructions go here...They do not currently exist. banana banana banana banana...</Text>
			</View>
			<View style={styles.card}>
				<Text style={styles.sectionTitle}>HOW TO GET THERE</Text>
				<Text style={styles.descriptionText}>Transit options to help you get there in time.</Text>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.cancelButton}>
					<Text style={styles.cancelButtonText}>CANCEL</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.claimButton}>
					<Text style={styles.claimButtonText}>CLAIM</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default ClientDonationDetailScreen;