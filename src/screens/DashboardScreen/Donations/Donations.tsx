import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Divider } from 'react-native-paper';
import getDonations from '../../../util/getDonations';
import DonationListItem from './DonationListItem';
import { SpacerInline } from '@elements';

interface Donations {
	jwt: string;
	id: number;
}

export default ({ jwt, id }: Donations) => {
	const [ donations, setDonations ] = useState();

	const loadDonations = async () => {
		const donationsJson = await getDonations({ jwt, id })
		const sortedDonations = donationsJson && donationsJson.sort((a, b) => a.created_at < b.created_at);
		await setDonations(sortedDonations);
	};

	useEffect(() => {
		loadDonations();
	}, [donations]);

	return Array.isArray(donations)
		? (
			<ScrollView>
				{
					donations.map((donation, i) => (
						<View key={donation.id}>
							<Divider style={{ backgroundColor: 'blue' }} />
							<DonationListItem donation={donation} key={donation.id} />
							{ i === donations.length - 1 && <Divider style={{ backgroundColor: 'blue' }} /> }
						</View>
					))
				}
				<SpacerInline height={200} />
			</ScrollView>
		)
		: (
			<View style={{ height: '100%', justifyContent: 'center', alignItems: 'center'}}>
				<View>
					<Text>No donations to display</Text>
				</View>
			</View>	
		);
};
