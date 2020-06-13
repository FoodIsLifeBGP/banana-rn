import React from 'react';
import {
	Text,
	View,
	Image,
} from 'react-native';
import useGlobal from '@state';
import {
	TextButton,
	Modal,
} from '@elements';
import { Alert } from '@state/index.types';
import { useScheme } from '@util/colorSchemes';
import typography from '@util/typography';
import styles from './IncompleteFormAlert.styles';

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
			palette="secondary"
			open={alert !== undefined}
			onDismiss={handleDismiss}
		>

			<View style={styles.body}>

				<View style={styles.imageWrapper}>
					<Image
						style={styles.imageContainer}
						source={require('@assets/images/Ellipse.png')}
					/>
					<Text style={typography.h4}>BANANA</Text>
				</View>

				<View style={styles.textContainer}>
					<Text style={typography.body1}>
						{alert?.message || 'Uh oh, an unknown error occurred!'}
					</Text>
				</View>

				<View style={styles.buttonWrapper}>
					<View style={styles.leftButton}>
						<TextButton
							text="NO, KEEP IT"
							style={{
								width: 120,
							}}
							buttonStyle={{
								default: scheme.tertiary,
								pressed: scheme.secondary,
								disabled: scheme.disabled,
							}}
							onPress={handleCloseButtonPress}
						/>
					</View>
					<View style={styles.rightButton}>
						<TextButton
							text="YES, CANCEL"
							style={{
								width: 120,
							}}
							buttonStyle={{
								default: scheme.primary,
								pressed: scheme.secondary,
								disabled: scheme.disabled,
							}}
							onPress={handleCloseButtonPress}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};