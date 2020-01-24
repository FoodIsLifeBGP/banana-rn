import React from 'react';
import useGlobal from '@state';
import DonorRegistrationScreen from './DonorRegistrationScreen';
import ClientRegistrationScreen from './ClientRegistrationScreen';

export default () => {
	const [ state ] = useGlobal();
	const { userIdentity } = state;
	switch (userIdentity) {
		case 'donor': return <DonorRegistrationScreen />;
		case 'client':
		default: return <ClientRegistrationScreen />;
	}
};
