import { Paragraph } from '@elements';
import React from 'react';
import InfoScreen from '../InfoScreen';

export default () => (
	<InfoScreen
		title="You are logged out."
		nextScreenTitle="Log In"
		nextScreenDestination="LoginScreen"
		showBackButton={false}
	>
		<Paragraph>We hope to see you soon!</Paragraph>
	</InfoScreen>
);
