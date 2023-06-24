import React from 'react';
import {
	Text,
	View,
} from 'react-native';
import useGlobal from '@state';
import { TextButton } from '@elements/Button/TextButton';
import { Modal } from '@elements/Modal';
import { Alert } from '@state/index.types';
import { useScheme } from '@util/colorSchemes';
import typography from '@util/typography';
import styles from './TheAlertModal.styles';

export default () => {
	const [ globalState, globalActions ] = useGlobal() as any;
	const { alert }: { alert: Alert } = globalState;
	const { clearAlert } = globalActions;

	const scheme = useScheme();

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
			<View style={styles.body}>
				<View style={styles.textContainer}>
					<Text style={typography.body1}>
						{alert?.message || 'Uh oh, an unknown error occurred!'}
					</Text>
				</View>

				<TextButton
					text="OK"
					style={{
						width: 104,
					}}
					buttonStyle={{
						default: scheme.primary,
						pressed: scheme.secondary,
						disabled: scheme.disabled,
					}}
					onPress={handleCloseButtonPress}
				/>
			</View>
		</Modal>
	);
};
