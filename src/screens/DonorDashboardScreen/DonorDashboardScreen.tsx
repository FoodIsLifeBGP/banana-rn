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
				<View style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
				>
					<View>
						<Text style={styles.activeHeader}>ACTIVE</Text>
					</View>
					<TouchableOpacity onPress={() => navigate('DonationScreen', {})}>
						<View>
							<Text style={styles.plus}>+</Text>
						</View>
					</TouchableOpacity>
				</View>
				<Donations resource="donations" />
			</View>

		</View>
	);
};

export default DonorDashboardScreen;
