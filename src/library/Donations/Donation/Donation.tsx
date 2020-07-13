import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
} from 'react-native';
import { SpacerInline } from '@elements';
import { Donation } from './Donation.type';
import styles from './Donation.styles';

const getImgFilename = (donationCategory: string) => {
	switch (donationCategory) {
		case 'Produce':
			return require('@assets/images/Stock-image-produce.png');
		case 'Bread':
			return require('@assets/images/Stock-image-bread.png');
		case 'Hot Meal':
			return require('@assets/images/Stock-image-meals.png');
		case 'Protein':
			return require('@assets/images/Stock-image-protein.png');
		case 'Dairy':
			return require('@assets/images/Stock-image-dairy.png');
		default:
			return require('@assets/images/Stock-image-others.png');
	}
};

export default ({ donation }: Donation) => {
	const { navigate } = useNavigation();
	const {
		claims,
		created_at,
		// duration_minutes,
		food_name,
		// image_url,
		// measurement,
		// per_person,
		pickup_location,
		// total_servings,
		id,
		total_amount,
		status,
		category,
	} = donation;


	const icon = getImgFilename(category);

	// const icon = require('@assets/images/banana-icon.png');

	// const startTime = new Date(created_at);
	// const now = new Date();
	// const minutesElapsed = Math.round(now.getTime() - (startTime.getTime()) / 1000 / 60);
	// const timeLeft = minutesElapsed < duration_minutes
	//	? duration_minutes - minutesElapsed
	//	: 0;

	return (
		<TouchableOpacity
			onPress={() => navigate('DonationScreen', { donation, id, edit: true })}
		>
			<View>
				<View style={styles.infoContainer}>
					<View>
						<Text style={styles.infoTitle}>{category}</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<View style={{ ...styles.iconContainer }}>
							<Image source={icon} style={styles.icon} />
						</View>
						<View>
							<Text style={styles.infoTextBold}>{food_name}</Text>
							<Text style={styles.infoText}>{`About ${total_amount}`}</Text>
						</View>
					</View>
				</View>
			</View>
			<SpacerInline height={10} />
		</TouchableOpacity>
	);
};
