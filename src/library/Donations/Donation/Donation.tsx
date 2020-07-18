import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
} from 'react-native';
import typography from '@util/typography';
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
		food_name,
		id,
		total_amount,
		category,
	} = donation;


	const icon = getImgFilename(category);


	return (
		<TouchableOpacity
			onPress={() => navigate('DonationScreen', { donation, id, edit: true })}
		>
			<View style={styles.infoContainer}>
				<View style={{
					flexDirection: 'column', alignItems: 'center', width: 100, justifyContent: 'center',
				}}
				>
					<Text style={typography.h5}>{category}</Text>
					<Image source={icon} style={styles.icon} />
				</View>
				<View style={{ flexDirection: 'column', justifyContent: 'center' }}>
					<View>
						<Text style={typography.h3}>{food_name}</Text>
					</View>
					<View>
						<Text style={typography.h5}>{`about ${total_amount}`}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};
