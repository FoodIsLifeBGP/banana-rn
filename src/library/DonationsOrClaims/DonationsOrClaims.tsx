import React, { useEffect, useState } from 'react';
import { useIsFocused } from 'react-navigation-hooks';
import { ScrollView, View, FlatList, Text } from 'react-native';
import { Divider } from 'react-native-paper';
import useGlobal from '@state';
import { SpacerInline, EmptyStateView } from '@elements';
import DonationOrClaim from './DonationOrClaim';

interface LocalProps {
	resource: 'donations' | 'claims';
}

export default ({ resource }: LocalProps) => {
	const isFocused = useIsFocused();
	const [ state, actions ] = useGlobal() as any;

	const [ donationsOrClaims, setDonationsOrClaims ] = useState(state.donationsOrClaims);
	const [ loaded, setLoaded ] = useState(false);

	const getDonationsOrClaimsFromApi = async () => {
		const { getDonationsOrClaims, getActiveDonationsForClient, getLocation } = actions;
		const coords = await getLocation();
		const { userIdentity } = state;
		const method = userIdentity === 'client' && resource === 'donations' ? getActiveDonationsForClient : getDonationsOrClaims;
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

	return donationsOrClaims && Array.isArray(donationsOrClaims) && donationsOrClaims.length > 0
		? (
			<ScrollView>
				{
					(donationsOrClaims as any).map((donationOrClaim, i) => (
						<View key={donationOrClaim.id}>
							{
								resource !== 'donations' 
								&& <Divider style={{ backgroundColor: 'blue' }} />
							}
							<DonationOrClaim
								donationOrClaim={donationOrClaim}
								key={donationOrClaim.id}
								resource={resource}
							/>
							{
								resource !== 'donations'
								&& i === (donationsOrClaims as any).length - 1
								&& <Divider style={{ backgroundColor: 'blue' }} />
							}
						</View>
					))
				}
				<SpacerInline height={200} />
			</ScrollView>
		)
		: (
			<EmptyStateView
				upperText="No available donations near you."
				lowerText={'We will notify you when new donations are available.\nOR\nPlease check back later.'}
			/>
		);
};
