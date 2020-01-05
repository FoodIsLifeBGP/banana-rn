import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Divider } from 'react-native-paper';
import useGlobal from '@state';
import { SpacerInline } from '@elements';
import DonationOrClaim from './DonationOrClaim';

export default () => {
	const store = useGlobal() as any;
	const [ globalState, globalActions ] = store;

	const [ donationsOrClaims, setDonationsOrClaims ] = useState(null);
	const [ loaded, setLoaded ] = useState(false);

	const getDonationsOrClaimsFromApi = async () => {
		const data = await globalActions.getDonationsOrClaims();
		if (data) {
			await setDonationsOrClaims(data);
			setLoaded(true);
		}
	};

	useEffect(() => {
		getDonationsOrClaimsFromApi();
	}, []);

	if (!loaded) { return <Text>Suuup</Text>; }

	return donationsOrClaims && Array.isArray(donationsOrClaims) && donationsOrClaims !== []
		? (
			<ScrollView>
				{
					(donationsOrClaims as any).map((donationOrClaim, i) => (
						<View key={donationOrClaim.id}>
							<Divider style={{ backgroundColor: 'blue' }} />
							<DonationOrClaim donationOrClaim={donationOrClaim} key={donationOrClaim.id} />
							{
								i === (donationsOrClaims as any).length - 1
									&& <Divider style={{ backgroundColor: 'blue' }} />
							}
						</View>
					))
				}
				<SpacerInline height={200} />
			</ScrollView>
		)
		: (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<View>
					<Text>No donations to display</Text>
				</View>
			</View>
		);
};
