import React from 'react';
import { Text } from 'react-native';
import useGlobal from '@state';
import InfoScreen from '../InfoScreen';
import AccountSuspendedScreen from '../AccountSuspendedScreen';
import ApplicationPendingScreen from '../ApplicationPendingScreen';
import ApplicationApprovedScreen from '../ApplicationApprovedScreen';
import ApplicationIncompleteScreen from '../ApplicationIncompleteScreen';
import DashboardScreen from '../DashboardScreen';

export default () => {
	const [ state ] = useGlobal();
	const { user = {} as any, jwt = '' } = state;
	const { id } = user;
	if (!jwt || !user) { return <Text>Loading...</Text>; }

	switch (user?.account_status) {
		case 'incomplete': return <ApplicationIncompleteScreen />;
		case 'suspended': return <AccountSuspendedScreen />;
		case 'processing': return <ApplicationPendingScreen />;
		case 'approved': return <ApplicationApprovedScreen id={id} jwt={jwt} />;
		case 'active': return <DashboardScreen />;
		default: return <InfoScreen title="Login error" nextScreenDestination="LoginScreen" nextScreenTitle="Login" />;
	}
};
