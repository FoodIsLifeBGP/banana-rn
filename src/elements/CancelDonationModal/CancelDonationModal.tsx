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
import { useScheme } from '@util/colorSchemes';
import typography from '@util/typography';
import styles from './CancelDonationModal.styles';


interface CancelDonationModalProps {
	onYes?: () => void;
	onNo?: () => void;
}

export default ({
	onYes = () => {},
	onNo = () => {},
}: CancelDonationModalProps) => {
	const [ globalState, globalActions ] = useGlobal() as any;
	const { alert }: { alert: Alert } = globalState;
	const { clearAlert } = globalActions;

	const scheme = useScheme();

	const handleNo = () => {
		clearAlert();
		onNo();
	};

	const handleYes = () => {
		clearAlert();
		onYes();
	};

	const handleDismiss = () => {
		if (alert.dismissable) {
			clearAlert();
		}
	};

	return (
		<Modal
			style={styles.container}
			title={alert?.title || 'ARE YOU SURE?'}
			palette="secondary"
			open={alert !== undefined}
			onDismiss={handleDismiss}
		>

			<View style={styles.body}>

				<View style={styles.textContainer}>
					<Text style={typography.body1}>
						{alert?.message || 'This donation will be canceled'}
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
							onPress={handleNo}
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
							onPress={handleYes}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};
