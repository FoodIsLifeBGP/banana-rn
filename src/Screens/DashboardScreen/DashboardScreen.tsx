import React from 'react';
import { View } from 'react-native';
import { Title, SpacerInline, Header } from '../../elements';
import Donations from './Donations';
import styles from './DashboardScreen.styles';

const DashboardScreen = ({ jwt, id }) => (
	<View style={styles.outerContainer}>
		<View>
			<Header showBackButton={false} />
			<Title text="Donations" />
			<SpacerInline height={20} />
		</View>

		<Donations jwt={jwt} id={id} />

		<View>
			<SpacerInline height={40} />
		</View>
	</View>
);

export default DashboardScreen;
