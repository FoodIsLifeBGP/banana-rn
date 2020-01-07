import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useGlobal from '@state';
import { Title, SpacerInline, Header } from '@elements';
import DonationsOrClaims from './DonationsOrClaims';
import styles from './DashboardScreen.styles';

const DashboardScreen = () => {
	const { navigate } = useNavigation();
	const [ globalState ] = useGlobal();
	const { userIdentity } = globalState;
	const title = userIdentity === 'donor' ? 'My Donations.' : 'My Claims.';

	return (
		<View style={styles.outerContainer}>
			<View>
				<Header showBackButton={false} />
				<Title text={title} />
				<SpacerInline height={20} />
			</View>

			<DonationsOrClaims />

			{ userIdentity === 'donor' && (
				<View style={styles.addButton}>
					<TouchableOpacity
						onPress={() => navigate('DonationScreen', {})}
					>
						<Text style={styles.plus}>
							+
						</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

export default DashboardScreen;
