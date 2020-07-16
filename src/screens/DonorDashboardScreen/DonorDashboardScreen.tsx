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
					<TouchableOpacity onPress={() => navigate('DonationScreen', {})}>

						<View style={{
							flex: 1,
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginBottom: -15,
							marginTop: -15,
						}}
						>
							<View>
								<Text style={styles.activeHeader}>ACTIVE</Text>
							</View>

							<View>
								<Text style={styles.plus}>+</Text>
							</View>
						</View>
					</TouchableOpacity>
				</View>
				<Donations resource="donations" />
			</View>

		</View>
	);
};

export default DonorDashboardScreen;
