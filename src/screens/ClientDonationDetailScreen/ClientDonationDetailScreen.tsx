import React from 'react';
import { View, Text } from 'react-native';
import useGlobal from '@state';


const ClientDonationDetailScreen = () => {
	const [ state, action ] = useGlobal() as any;
	const { userIdentity } = state;
	console.log(userIdentity)

	return (
		<View>
			<Text>Hello from Client Donation Detail Screen</Text>
		</View>
	);
};

export default ClientDonationDetailScreen;