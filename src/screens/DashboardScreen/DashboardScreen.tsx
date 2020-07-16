import React from 'react';
import { View } from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import useGlobal from '@state';
import { Title, SpacerInline, NavBar } from '@elements';
import { DonationsOrClaims } from '@library';
import styles from './DashboardScreen.styles';
import DonorDashboardScreen from '../DonorDashboardScreen';

const DashboardScreen = () => {
	const [ state ] = useGlobal();
	const { userIdentity } = state;
	let resource: 'donations' | 'claims' = useNavigationParam('resource') || 'donations';

	if (userIdentity === 'donor') {
		return DonorDashboardScreen();
	}

	const title = (resource === 'donations') ? 'Donations' : 'Claims';

	return (
		<View style={styles.outerContainer}>

			{ resource === 'donations' && (
				<NavBar
					showBackButton={false}
					leftButton="qrCode"
					showSelector={true}
					onMap={() => {}}
					onList={() => {}}
					position="map"
				/>
			)}

			<View style={styles.contentContainer}>
				<Title text={title} />
				<SpacerInline height={20} />
				<DonationsOrClaims resource={ resource } />
			</View>

		</View>
	);
};

export default DashboardScreen;
