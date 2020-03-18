import React from 'react';
import {
	View, Text, Button,
} from 'react-native';
import useGlobal from '@state';
import { Modal } from '@elements';
import { Alert } from '@state/index.types';

import styles from './TheAlertModal.styles';

// TODO: add styling to modal body, can it be applied to the Modal component, and have it cascade to Alert's children?
// TODO: replace Button element with custom TextButton element

export default () => {
	const [ globalState, globalActions ] = useGlobal() as any;
	const { alert }: {alert: Alert} = globalState;
	const { clearAlert } = globalActions;

	const handleCloseButtonPress = () => {
		clearAlert();
	};

	const handleDismiss = () => {
		if (alert.dismissable) {
			clearAlert();
		}
	};

	return (
		<Modal
			style={styles.container}
			title={alert?.title || 'Alert'}
			palette="accent"
			open={alert !== undefined}
			onDismiss={handleDismiss}
		>
			<View>
				<Text>{alert?.message || 'Uh oh, an unknown error occurred!'}</Text>

				<Button title="OK" onPress={handleCloseButtonPress} />
			</View>
		</Modal>
	);
};
