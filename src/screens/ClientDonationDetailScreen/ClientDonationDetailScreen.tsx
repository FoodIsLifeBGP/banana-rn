import React from 'react';
import { Image, View, Text, ScrollView } from 'react-native';
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

	const testImage = require('@assets/images/banana-icon.png');

	const startTime = new Date(created_at);
	const now = new Date();
	console.log('starttime and now..', startTime, now)
	const difference = now - startTime
	console.log('difference..',difference)
	const minutesElapsed = Math.round(now.getTime() - (startTime.getTime()) / 1000 / 60);
	// uncomment this once we have current and active items
	const timeLeft = minutesElapsed < duration_minutes
		? duration_minutes - minutesElapsed
		: 0;
	// const timeLeft = duration_minutes - minutesElapsed
	const timeRemaining = () => {
		if (timeLeft === 0){
			return 'Expired'
		}
		const seconds = Math.round(difference / 1000) < 60 ? Math.round(difference / 1000) : Math.round(difference / 1000) % 60
		const minutes = Math.round(difference / 1000 / 60) < 60 ? Math.round(difference / 1000 / 60) : Math.round(difference / 1000 / 60) % 60
		const hours = Math.round(difference / 1000 / 60 / 60) < 24 ? Math.round(difference / 1000 / 60 / 60) : Math.round(difference / 1000 / 60 / 60) % 24
		return `${hours}:${minutes}:${seconds}`
	}

	return (
		<ScrollView style={styles.outerContainer}>
			<View style={styles.imageContainer}>
				<Image source={testImage} style={styles.image}/>
			</View>
			<View style={styles.card}>
				<Text style={styles.foodTitle}>{food_name}</Text>
				{/* get donor from donor id for below, import icon to use. */}
				<Text style={styles.donorSubtitle}> FROM {donor_id}</Text>
				<Text style={styles.subtitle}>{total_servings} {measurement} · [INSERT DISTANCE]</Text>
				{/* insert time remaining box */}
				{console.log('date.now', Date.now())}
				{console.log('created_at...', created_at)}
				{console.log('created_at to integer?', new Date(created_at).getTime())}
				{console.log('time remaining function...', timeRemaining())}
				<Text style={styles.descriptionText}>{timeRemaining()}</Text>
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