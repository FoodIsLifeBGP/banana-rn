import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Divider } from 'react-native-paper';
import getDonations from '../../../util/getDonations';
import Donation from './Donation/Donation';

export default ({ jwt, id }) => {
	const [ donations, setDonations ] = useState();

	const loadDonations = async () => {
		const dons = await getDonations({ jwt, id });
		await setDonations(dons);
	};

	useEffect(() => {
		loadDonations();
	}, []);

	return Array.isArray(donations)
		? (
				<ScrollView>
					{
						donations.map((donation, i) => {
							return (
								<View key={donation.id}>
									<Divider style={{ backgroundColor: 'blue' }} />
									<Donation donation={donation} key={donation.id} />
									{ i === donations.length - 1 && <Divider style={{ backgroundColor: 'blue' }} /> }
								</View>
							)
						})
					}
				</ScrollView>
			)
		: <Text>No donations</Text>;
};