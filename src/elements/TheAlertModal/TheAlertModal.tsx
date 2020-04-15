import React from 'react';
import {
	Text,
	View,
} from 'react-native';
import useGlobal from '@state';
import {
	TextButton,
	Modal,
} from '@elements';
import { Alert } from '@state/index.types';
import { COLOR_SCHEMES } from '@util/colorSchemes';
import { useTheme } from 'react-navigation';
import typography from '@util/typography';
import styles from './TheAlertModal.styles';

export default () => {
	const [ globalState, globalActions ] = useGlobal() as any;
	const { alert }: { alert: Alert } = globalState;
	const { clearAlert } = globalActions;

	const colorScheme = COLOR_SCHEMES[useTheme()];

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
					style={[
						colorScheme.primary,
					]}
					pressedStyle={colorScheme.secondary}
					onPress={handleCloseButtonPress}
				/>
			</View>
		</Modal>
	);
};
