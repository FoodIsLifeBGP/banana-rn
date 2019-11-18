import React from 'react';
import { View, Text } from 'react-native';
import styles from './Donation.styles';

export default ({ donation }) => {
	console.log(donation)
	const {
		claims,
		created_at,
		duration_minutes,
		food_name,
		measurement,
		per_person,
		pickup_location,
		total_servings,
	} = donation;
	const startTime = new Date(created_at);
	const now = new Date;
	const minutesElapsed = Math.round((now - startTime) / 1000 / 60);
	const timeLeft = minutesElapsed < duration_minutes ? minutesElapsed : 0;

	return (
		<View style={styles.card}>
			<View style={styles.icon} />
			<View style={styles.infoContainer}>
				<Text style={styles.infoText}>{food_name.toUpperCase()}: {per_person} {measurement}/claim</Text>
				<Text style={styles.infoText}>{claims.length}/{total_servings} servings claimed</Text>
				<Text style={styles.infoText}>{timeLeft} min. remaining</Text>
				<Text style={styles.infoText}>Pickup: {pickup_location}</Text>
			</View>
		</View>
	)
}