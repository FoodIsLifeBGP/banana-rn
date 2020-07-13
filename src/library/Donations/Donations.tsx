import React, { useEffect, useState } from 'react';
import { useIsFocused } from 'react-navigation-hooks';
import { ScrollView, View, Text } from 'react-native';
import { Divider } from 'react-native-paper';
import useGlobal from '@state';
import { SpacerInline, EmptyStateView } from '@elements';
import Donation from './Donation';

interface LocalProps {
	resource: 'donations';
}

export default ({ resource }: LocalProps) => {
	const isFocused = useIsFocused();
	const [ state, actions ] = useGlobal() as any;

	const [ donations, setDonationsOrClaims ] = useState(state.donationsOrClaims);
	const [ loaded, setLoaded ] = useState(false);

	const getDonationsOrClaimsFromApi = async () => {
		const { getDonations, getActiveDonationsForClient } = actions;
		const { userIdentity } = state;
		const method = userIdentity === 'client' && resource === 'donations' ? getActiveDonationsForClient : getDonations;
		const data = await method(resource);
		if (data) {
			await setDonationsOrClaims(data);
			setLoaded(true);
		}
	};

	useEffect(() => {
		if (isFocused) {
			getDonationsOrClaimsFromApi();
		}
	}, [ isFocused ]);

	if (!loaded) { return <Text>Loading...</Text>; }

	return donations && Array.isArray(donations) && donations.length > 0
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
				<SpacerInline height={200} />
			</ScrollView>
		)
		: (
			<EmptyStateView lowerText="You currently don't have any donations." />
		);
};
