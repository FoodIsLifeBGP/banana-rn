import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
} from 'react-native';
import { Claim } from './DonationOrClaim.type';
import styles from './DonationOrClaim.styles';

export default ({ claim }: Claim) => {
	const { navigate } = useNavigation();
	const {
		address,
		canceled,
		client_id,
		completed,
		created_at,
		donation,
		donor,
		id,
		qr_code,
	} = claim;
	const {
		duration_minutes,
		food_name,
		per_person,
		measurement,
		pickup_location,
	} = donation;

	const icon = require('@assets/images/banana-icon.png');

	const startTime = new Date(created_at);
	const now = new Date();
	const minutesElapsed = Math.round((now.getTime() - startTime.getTime()) / 1000 / 60);
	const timeLeft = minutesElapsed < duration_minutes
		? duration_minutes - minutesElapsed
		: 0;
	return (
		<TouchableOpacity
			onPress={() => navigate('ClaimDetailScreen', { claim, id })}
		>
			<View style={styles.card}>
				<View style={[ styles.iconContainer, { backgroundColor: timeLeft > 0 ? 'blue' : 'gray' } ]}>
					<Image source={icon} style={styles.icon} />
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.infoTextBold}>{`Status: ${timeLeft > 0 ? 'Active' : 'Inactive'}`}</Text>
					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.infoText}>{food_name}</Text>
						<Text style={styles.infoText} numberOfLines={1}>{`: ${per_person} ${measurement}/person`}</Text>
					</View>
					<Text style={styles.infoText}>{`${timeLeft} min. remaining`}</Text>
					<Text style={styles.infoText} numberOfLines={1}>{`Pickup: ${pickup_location}`}</Text>
				</View>
			</View>

		</TouchableOpacity>
	);
};
