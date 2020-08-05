import React, { useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from 'react-navigation-hooks';
import { ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { EmptyStateView, NavBar, Title } from '@elements';
import useGlobal from '@state';
import Donation from '@library/Donations/Donation';
import styles from './DonorDashboardScreen.styles';

const DonorDashboardScreen = () => {
	const { navigate } = useNavigation();
	const isFocused = useIsFocused();
	const [ state, actions ] = useGlobal() as any;

	const [ donations, setDonations ] = useState(state.donationsOrClaims);
	const [ loaded, setLoaded ] = useState(false);

	const getDonorActiveDonations = async () => {
		const { getDonations } = actions;
		const data = await getDonations();
		if (data) {
			await setDonations(data);
			setLoaded(true);
		}
	};

	useEffect(() => {
		if (isFocused) {
			getDonorActiveDonations();
		}
	}, [ isFocused ]);

	return (
		<View style={styles.outerContainer}>
			<NavBar showBackButton={false} />

			<View style={styles.contentContainer}>
				<Title text="Donations" />
				<View style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
				>
					<View>
						<Text style={styles.activeHeader}>ACTIVE</Text>
					</View>
					<TouchableOpacity onPress={() => navigate('DonationScreen')}>
						<View>
							<Text style={styles.plus}>+</Text>
						</View>
					</TouchableOpacity>
				</View>
				{ !loaded && <Text>Loading...</Text> }
				{loaded && donations && Array.isArray(donations) && donations.length > 0
					? (
						<ScrollView>
							{
								(donations as any).map((donation, i) => (
									<View key={donation.id}>
										<Donation
											donation={donation}
											key={donation.id}
											resource="donations"
										/>
										{i === (donations as any).length - 1}
									</View>
								))
							}
						</ScrollView>
					)
					: (
						<EmptyStateView lowerText="You currently don't have any donations." />
					)}
			</View>

		</View>
	);
};

export default DonorDashboardScreen;
