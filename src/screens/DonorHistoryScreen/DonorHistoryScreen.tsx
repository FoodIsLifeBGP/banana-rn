import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useIsFocused } from 'react-navigation-hooks';
import { Title, NavBar, EmptyStateView } from '@elements';

import Donation from '@library/Donations/Donation/Donation';
import useGlobal from '@state';

import styles from './DonorHistoryScreen.styles';

const DonorHistoryScreen = () => {
	const isFocused = useIsFocused();
	const [ state ] = useGlobal() as any;
	const [ donations, setDonations ] = useState([]);

	useEffect(() => {
		if (isFocused) {
			const { user } = state;
			const donor = {
				address_street: user.address_street,
				address_city: user.address_city,
				address_zip: user.address_zip,
			};
			const tempDonations = state.user.donations.map(d => ({ ...d, donor }));
			setDonations(tempDonations);
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
						<Text style={styles.activeHeader}>History</Text>
					</View>
				</View>
				{(donations && donations.length > 0) ? (
					<ScrollView>
						{(donations as any).sort((a, b) => a.created_at < b.created_at).map((donation, i) => (
							<View key={donation.id}>
								<Donation
									donation={donation}
									key={donation.id}
									h={true}
								/>
							</View>
						))}
					</ScrollView>
				) : (
					<EmptyStateView lowerText="You currently don't have any donations." />
				)}
			</View>
		</View>
	);
};

export default DonorHistoryScreen;