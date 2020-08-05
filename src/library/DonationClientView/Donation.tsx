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
import { Donation } from './Donation.type';
import styles from './Donation.styles';

interface ClientDonationProps {
	isClaim: boolean;
	donation: Donation;
}

export default ({ donation, isClaim }: ClientDonationProps) => {
	const { navigate } = useNavigation();
	const {
		category,
		food_name,
		id,
		distance,
		donor,
	} = donation;
	const icon = categoryImage(category);


	return (
		<TouchableOpacity
			onPress={() => (!isClaim ? navigate('MakeClaimScreen', { donation, id })
				: navigate('ClaimDetailsScreen', { donation }))}
		>
			<View style={styles.card}>
				<View style={styles.categoryText}>
					<Text style={typography.h4}>{category}</Text>
				</View>
				<View style={styles.mainContainer}>
					<View style={[ styles.iconContainer, { backgroundColor: 'blue' } ]}>
						<Image source={icon} style={styles.icon} />
					</View>
					<View style={styles.infoContainer}>
						<Text style={typography.h3}>{food_name}</Text>
						<View style={styles.infoBottomContainer}>
							<Icon name="location" size={18} />
							<Text style={[ typography.body3, { fontSize: 18, marginHorizontal: 4 } ]}>{donor.donor_name}</Text>
							<Icon name="distance" size={18} />
							<Text style={[ typography.body3, { fontSize: 18, marginHorizontal: 4 } ]}>{distance && `${distance.toFixed(1)} mi`}</Text>
						</View>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};
