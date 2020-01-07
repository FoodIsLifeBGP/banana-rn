import React from 'react';
import useGlobal from '@state';
import DonorRegistrationScreen from './DonorRegistrationScreen';
import ClientRegistrationScreen from './ClientRegistrationScreen';

export default () => {
	const [ globalState ] = useGlobal();
	const { userIdentity } = globalState;
	switch (userIdentity) {
		case 'donor': return <DonorRegistrationScreen />;
		case 'client':
		default: return <ClientRegistrationScreen />;
	}
};
