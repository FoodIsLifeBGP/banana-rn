import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Title, SpacerInline, NavBar } from '@elements';
import { Donations } from '@library';
import { Divider } from 'react-native-paper';
import styles from './DonorDashboardScreen.styles';

const DonorDashboardScreen = () => {
	const { navigate } = useNavigation();
	const title = 'Donations';

	return (
		<View style={styles.outerContainer}>
			<NavBar showBackButton={false} />

			<View style={styles.contentContainer}>
				<Title text={title} />
				<View>
					<TouchableOpacity onPress={() => navigate('DonorDonationScreen', {})}>

						<View style={{
							width: '100%',
							flexDirection: 'row',
						}}
						>
							<Text style={styles.activeHeader}>Active</Text>
							<View style={{ flex: 1 }} />
							<Text style={styles.plus}>+</Text>
						</View>
						<Divider style={{ backgroundColor: 'blue' }} />
					</TouchableOpacity>
				</View>
				<SpacerInline height={20} />
				<Donations resource="donations" />
			</View>

			<View style={styles.addButton}>
				<TouchableOpacity onPress={() => navigate('DonationScreen', {})}>
					<Text style={styles.plus}>
						+
					</Text>
				</TouchableOpacity>
			</View>

		</View>
	);
};

export default DonorDashboardScreen;
