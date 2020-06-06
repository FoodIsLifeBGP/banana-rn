import React from 'react';
import { View } from 'react-native';
import useGlobal from '@state';
import { Title, SpacerInline, NavBar } from '@elements';
import { DonationsOrClaims } from '@library';
import styles from './DashboardScreen.styles';
import DonorDashboardScreen from '../DonorDashboardScreen';

const DashboardScreen = () => {
	const [ state ] = useGlobal();
	const { userIdentity } = state;

	if (userIdentity === 'donor') {
		return DonorDashboardScreen();
	}

	const title = 'Donations';

	return (
		<View style={styles.outerContainer}>

			<NavBar showBackButton={false} />

			<View style={styles.contentContainer}>
				<Title text={title} />
				<SpacerInline height={20} />
				<DonationsOrClaims resource="claims" />
			</View>

		</View>
	);
};

export default DashboardScreen;
