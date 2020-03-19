import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
} from 'react-native';
import { Donation } from './DonationOrClaim.type';
import styles from './DonationOrClaim.styles';

export default ({ donation }: Donation) => {
	const { navigate } = useNavigation();
	const {
		claims,
		created_at,
		duration_minutes,
		food_name,
		image_url,
		measurement,
		per_person,
		pickup_location,
		total_servings,
		id,
	} = donation;
	const icon = require('@assets/images/banana-icon.png');

	const startTime = new Date(created_at);
	const now = new Date();
	const minutesElapsed = Math.round(now.getTime() - (startTime.getTime()) / 1000 / 60);
	const timeLeft = minutesElapsed < duration_minutes
		? duration_minutes - minutesElapsed
		: 0;

	return (
		<TouchableOpacity
			onPress={() => navigate('DonationScreen', { donation, id, edit: true })}
		>
			<View style={{ ...styles.card }}>
				<View style={{ ...styles.iconContainer, backgroundColor: timeLeft > 0 ? 'blue' : 'gray' }}>
					<Image source={icon} style={styles.icon} />
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.infoTextBold}>{`Status: ${timeLeft > 0 ? 'Active' : 'Inactive'}`}</Text>
					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.infoText}>{food_name}</Text>
						{/* TODO: properly pluralize per_person here */}
						<Text style={styles.infoText} numberOfLines={1}>{`: ${per_person} ${measurement}/person`}</Text>
					</View>
					<Text style={styles.infoText}>{`${(claims && claims.length) || 0}/${total_servings} servings claimed`}</Text>
					<Text style={styles.infoText}>{`${timeLeft} min. remaining`}</Text>
					<Text style={styles.infoText} numberOfLines={1}>{`Pickup: ${pickup_location}`}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};
