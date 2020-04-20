import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useGlobal from '@state';
import { Title, SpacerInline, Header } from '@elements';
import Donations from '../../library/Donations';
import styles from './DonorDashboardScreen.styles';

const DonorDashboardScreen = () => {
	const { navigate } = useNavigation();
	const [ state ] = useGlobal();
	const title = 'My Donations.';

	return (
		<View style={styles.outerContainer}>
			<View>
				<Header showBackButton={false} />
				<Title text={title} />
				<SpacerInline height={20} />
			</View>

			<Donations resource="donations" />

			<View style={styles.addButton}>
				<TouchableOpacity onPress={() => navigate('DonorDonationScreen', {})}>
					<Text style={styles.plus} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default DonorDashboardScreen;
