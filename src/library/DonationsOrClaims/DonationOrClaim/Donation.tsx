import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
} from 'react-native';
import { Icon } from '@elements';
import typography from '@util/typography';
import { categoryImage } from '@util/donationCategory';
import { Donation } from './DonationOrClaim.type';
import styles from './DonationOrClaim.styles';

export default ({ donation }: Donation) => {
	const { navigate } = useNavigation();
	const {
		category,
		created_at,
		duration_minutes,
		food_name,
		id,
		distance,
	} = donation;
	const icon = categoryImage(category);

	const startTime = new Date(created_at);
	const now = new Date();
	const minutesElapsed = Math.round(now.getTime() - (startTime.getTime()) / 1000 / 60);
	const timeLeft = minutesElapsed < duration_minutes
		? duration_minutes - minutesElapsed
		: 0;

	const { donor_name } = donation.donor;

	return (
		<TouchableOpacity
			onPress={() => navigate('MakeClaimScreen', { donation, id })}
		>
			<View style={styles.card}>
				<View style={styles.categoryText}>
					<Text style={typography.h4}>{category}</Text>
				</View>
				<View style={styles.mainContainer}>
					<View style={[ styles.iconContainer, { backgroundColor: timeLeft > 0 ? 'blue' : 'gray' } ]}>
						<Image source={icon} style={styles.icon} />
					</View>
					<View style={styles.infoContainer}>
						<Text style={typography.h3}>{food_name}</Text>
						<View style={styles.infoBottomContainer}>
							<Icon name="location" size={18} />
							<Text style={[ typography.body3, { fontSize: 18, marginHorizontal: 4 } ]}>{donor_name}</Text>
							<Icon name="distance" size={18} />
							<Text style={[ typography.body3, { fontSize: 18, marginHorizontal: 4 } ]}>{distance && `${distance.toFixed(1)} mi`}</Text>
						</View>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};
