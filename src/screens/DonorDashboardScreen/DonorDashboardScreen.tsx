import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Title, SpacerInline, NavBar } from '@elements';
import { Donations } from '@library';
import styles from './DonorDashboardScreen.styles';

const DonorDashboardScreen = () => {
	const { navigate } = useNavigation();
	const title = 'Donations';

	return (
		<View style={styles.outerContainer}>
			<NavBar showBackButton={false} />

			<View style={styles.contentContainer}>
				<Title text={title} />
				<SpacerInline height={20} />
				<Donations resource="donations" />
			</View>

			<View style={styles.addButton}>
				<TouchableOpacity onPress={() => navigate('DonorDonationScreen', {})}>
					<Text style={styles.plus}>
						+
					</Text>
				</TouchableOpacity>
			</View>

		</View>
	);
};

export default DonorDashboardScreen;
