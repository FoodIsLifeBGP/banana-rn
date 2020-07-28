import React, { useEffect, useState } from 'react';
import { useIsFocused } from 'react-navigation-hooks';
import {
	ScrollView, View, Text,
} from 'react-native';
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

	const getDonationsOrClaimsFromApi = () => {
		const { getDonationsOrClaims, getActiveDonationsForClient, getLocation } = actions;
		const { userIdentity } = state;
		const method = userIdentity === 'client' && resource === 'donations' ? getActiveDonationsForClient : getDonationsOrClaims;
		return method(resource);
	};

	useEffect(() => {
		let mounted = true;
		if (isFocused) {
			getDonationsOrClaimsFromApi().then(data => {
				if (mounted && Array.isArray(data)) {
					setDonationsOrClaims(data);
					setLoaded(true);
				}
			});
		}
		// Cleanup
		return () => { mounted = false; };
	}, [ isFocused ]);

	if (!loaded) {
		return <Text>Loading...</Text>;
	}
	// Assume location settings are not enabled if coordinates are not set and there are no failed requests.
	if (resource === 'donations' && !state.user.coords && !state.user.alert) {
		return (
			<EmptyStateView
				upperText="We are unable to get your current location."
				lowerText="Please check your app settings to make sure location permissions are enabled."
			/>
		);
	}

	return donationsOrClaims && Array.isArray(donationsOrClaims) && donationsOrClaims.length > 0
		? (
			<ScrollView>
				{
					(donationsOrClaims as any).map((donationOrClaim) => (
						<View key={donationOrClaim.id}>
							<DonationOrClaim
								donationOrClaim={donationOrClaim}
								key={donationOrClaim.id}
								resource={resource}
							/>
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
