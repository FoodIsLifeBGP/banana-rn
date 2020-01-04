import React from 'react';
import { Text } from 'react-native';
import useGlobal from '@state';
import InfoScreen from '../InfoScreen';
import AccountSuspendedScreen from '../AccountSuspendedScreen';
import ApplicationPendingScreen from '../ApplicationPendingScreen';
import ApplicationApprovedScreen from '../ApplicationApprovedScreen';
import DashboardScreen from '../DashboardScreen';

export default () => {
	const [ globalState ] = useGlobal();
	const { user = {} as any, jwt = '' } = globalState;
	const { id } = user;

	if (!jwt || !user) { return <Text>Loading...</Text>; }

	switch (user?.account_status) {
		case 'suspended': return <AccountSuspendedScreen />;
		case 'pending': return <ApplicationPendingScreen />;
		case 'approved': return <ApplicationApprovedScreen id={id} />;
		case 'active': return <DashboardScreen jwt={jwt} id={id} />;
		default: return <InfoScreen title="Login error" nextScreenDestination="LoginScreen" nextScreenTitle="Login" />;
	}
};
