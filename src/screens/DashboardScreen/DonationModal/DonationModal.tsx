import React from 'react';
import { Modal } from 'react-native-paper';
import { View } from 'react-native';

export default ({ donation }: { donation: string }) => (
	<Modal
		visible={true}
		dismissable={true}
	>
		<View />
	</Modal>
);
