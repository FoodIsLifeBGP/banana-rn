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
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'flex-end',
							borderStyle: 'solid',
							borderWidth: 2,
						}}
						>
							<View>
								<Text style={styles.activeHeader}>Active</Text>
							</View>

							<View>
								<Text style={styles.plus}>+</Text>
							</View>
						</View>
					</TouchableOpacity>
				</View>
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
