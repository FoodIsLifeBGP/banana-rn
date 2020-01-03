import React from 'react';
import getEnv from '@util/environment';
import DonorRegistrationScreen from './DonorRegistrationScreen';
import ClientRegistrationScreen from './ClientRegistrationScreen';

export default () => {
	const { USER_IDENTITY } = getEnv();
	switch (USER_IDENTITY) {
		case 'donor': return <DonorRegistrationScreen />;
		case 'client':
		default: return <ClientRegistrationScreen />;
	}
};
