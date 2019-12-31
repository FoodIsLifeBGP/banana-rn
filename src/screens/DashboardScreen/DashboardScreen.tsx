import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Title, SpacerInline, Header } from '@elements';
import Donations from './Donations';
import styles from './DashboardScreen.styles';

const DashboardScreen = ({ jwt, id }: { jwt: string; id: number }) => {
	const { navigate } = useNavigation();
	return (
		<View style={styles.outerContainer}>
			<View>
				<Header showBackButton={false} />
				<Title text="My Donations." />
				<SpacerInline height={20} />
			</View>

			<Donations
				jwt={jwt}
				id={id}
			/>

			<View style={styles.addButton}>
				<TouchableOpacity
					onPress={() => navigate('DonationScreen', {})}
				>
					<Text style={styles.plus}>
						+
					</Text>
				</TouchableOpacity>
			</View>

		</View>
	);
};

export default DashboardScreen;
