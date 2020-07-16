import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
} from 'react-native';
import { Icon } from "@elements";
import typography from "@util/typography";
import { Donation } from './DonationOrClaim.type';
import styles from './DonationOrClaim.styles';

const getImageForCategory = (category: String) => {
	switch (category) {
		case 'Bread':
			return require('@assets/images/Stock-image-bread.png');
		case 'Dairy':
			return require('@assets/images/Stock-image-dairy.png');
		case 'Hot Meal':
			return require('@assets/images/Stock-image-meals.png');
		case 'Produce':
			return require('@assets/images/Stock-image-produce.png');
		case 'Protein':
			return require('@assets/images/Stock-image-protein.png');
		default:
			return require('@assets/images/Stock-image-others.png');

	}
};

export default ({ donation }: Donation) => {
	const { navigate } = useNavigation();
	const {
		category,
		claims,
		created_at,
		duration_minutes,
		food_name,
		image_url,
		measurement,
		per_person,
		pickup_location,
		total_amount: total_servings,
		id,
	} = donation;
	const icon = getImageForCategory(category);

	const startTime = new Date(created_at);
	const now = new Date();
	const minutesElapsed = Math.round(now.getTime() - (startTime.getTime()) / 1000 / 60);
	const timeLeft = minutesElapsed < duration_minutes
		? duration_minutes - minutesElapsed
		: 0;
	
	// TODO: Get organization name and distance for donor.
	const organization_name = pickup_location;
	const distance = 0.0;

	return (
		<TouchableOpacity
			onPress={() => navigate('DonationsDetailScreen', { donation, id })}
		>
			<View style={styles.card}>
				<View style={styles.categoryText}>
					<Text style={typography.h4}>{category}</Text>
				</View>
				<View style={styles.mainContainer}>
					<View style={[styles.iconContainer, { backgroundColor: timeLeft > 0 ? 'blue' : 'gray' }]}>
						<Image source={icon} style={styles.icon} />
					</View>
					<View style={styles.infoContainer}>
						<Text style={typography.h3}>{food_name}</Text>
						<View style={styles.infoBottomContainer}>
							<Icon name='arrowDown' size={18}/>
							<Text style={[typography.body3, {fontSize: 18, marginHorizontal: 4}]}>{organization_name || 'No Name'}</Text>
							<Icon name='distance' size={18}/>
							<Text style={[typography.body3, {fontSize: 18, marginHorizontal: 4}]}>{`${distance.toFixed(1)} mi`}</Text>
						</View>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};
