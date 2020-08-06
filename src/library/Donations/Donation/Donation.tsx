import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
} from 'react-native';
import typography from '@util/typography';
import { categoryImage } from '@util/donationCategory';
import { Icon } from '@elements';
import { Donation } from './Donation.type';
import styles from './Donation.styles';

export default ({ donation, h }: Donation) => {
	const { navigate } = useNavigation();
	const {
		food_name,
		id,
		total_amount,
		category,
		created_at,
	} = donation;

	const icon = categoryImage(category);
	const date = new Date(created_at);
	const mm = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
	const dd = date.getDay() < 10 ? `0${date.getDay()}` : date.getMonth();
	const yyyy = date.getFullYear();


	return (
		<TouchableOpacity
			onPress={() => navigate('DonationsDetailScreen', { donation, id, edit: true })}
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
						{h ? (
							<View style={{ flexDirection: 'row' }}>
								<Icon name="time" color="blue" size={20} />
								<Text style={{ ...typography.h5, marginLeft: 5 }}>{`${mm}/${dd}/${yyyy}`}</Text>
							</View>
						) : <Text style={typography.h5}>{`about ${total_amount}`}</Text>}
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};
