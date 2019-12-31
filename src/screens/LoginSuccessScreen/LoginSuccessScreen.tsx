import React, { useState, useEffect } from 'react';
import { AsyncStorage, Text } from 'react-native';
import InfoScreen from '../InfoScreen';
import AccountSuspendedScreen from '../AccountSuspendedScreen';
import ApplicationPendingScreen from '../ApplicationPendingScreen';
import ApplicationApprovedScreen from '../ApplicationApprovedScreen';
import DashboardScreen from '../DashboardScreen';

export default () => {
	const [ donor, setDonor ] = useState();
	const [ jwt, setJwt ] = useState();
	const [ loaded, setLoaded ] = useState(false);

	const getDonorAndJwt = async () => {
		await setDonor(JSON.parse(await AsyncStorage.getItem('donor') || ''));
		await setJwt(await AsyncStorage.getItem('jwt'));
		setLoaded(!([ donor, jwt ].includes('')));
	};

	useEffect(() => {
		getDonorAndJwt();
	}, [ loaded ]);

	if (!loaded) { return <Text>Loading...</Text>; }

	const { id } = donor;

	if (donor?.account_status === 'suspended') { return <AccountSuspendedScreen />; }
	if (donor?.account_status === 'pending') { return <ApplicationPendingScreen />; }
	if (donor?.account_status === 'approved') { return <ApplicationApprovedScreen id={id} />; }
	if (donor?.account_status === 'active') { return <DashboardScreen jwt={jwt} id={id} />; }

	return <InfoScreen title="Login error" nextScreenDestination="LoginScreen" nextScreenTitle="Login" />;
};
