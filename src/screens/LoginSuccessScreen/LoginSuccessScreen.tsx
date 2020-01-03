import React, { useState, useEffect } from 'react';
import { AsyncStorage, Text } from 'react-native';
import InfoScreen from '../InfoScreen';
import AccountSuspendedScreen from '../AccountSuspendedScreen';
import ApplicationPendingScreen from '../ApplicationPendingScreen';
import ApplicationApprovedScreen from '../ApplicationApprovedScreen';
import DashboardScreen from '../DashboardScreen';

export default () => {
	const [ user, setUser ] = useState({} as any);
	const [ jwt, setJwt ] = useState('');
	const [ loaded, setLoaded ] = useState(false);

	const getUserAndJwt = async () => {
		await setUser(JSON.parse(await AsyncStorage.getItem('user') || '{}'));
		await setJwt(await AsyncStorage.getItem('jwt') || '');
		console.log(jwt, user)
		setLoaded(!(jwt === '' || user === {}));
	};

	useEffect(() => {
		getUserAndJwt();
	}, [ loaded ]);

	if (!loaded) { return <Text>Loading...</Text>; }

	const { id } = user;

	if (user?.account_status === 'suspended') { return <AccountSuspendedScreen />; }
	if (user?.account_status === 'pending') { return <ApplicationPendingScreen />; }
	if (user?.account_status === 'approved') { return <ApplicationApprovedScreen id={id} />; }
	if (user?.account_status === 'active') { return <DashboardScreen jwt={jwt} id={id} />; }

	return <InfoScreen title="Login error" nextScreenDestination="LoginScreen" nextScreenTitle="Login" />;
};
