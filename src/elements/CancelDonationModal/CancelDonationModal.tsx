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
import styles from './CancelDonationModal.styles';

interface CancelDonationModalProps {
	onYes?: () => void;
	onNo?: () => void;
	okay?: () => void;
}

export default function ({
	onYes = () => {},
	onNo = () => {},
	okay = () => {},

}: CancelDonationModalProps) {
	const [ globalState, globalActions ] = useGlobal() as any;
	const { alert: alertObj }: { alert: Alert } = globalState;
	const { clearAlert } = globalActions;
	const scheme = useScheme();
	const [ state, { updateAlert } ] = useGlobal() as any;

	const handleNo = () => {
		clearAlert();
		onNo();
		alertObj.cancelFn && alertObj.cancelFn();
	};

	const handleYes = () => {
		clearAlert();
		onYes();
		alertObj.confirmFn && alertObj.confirmFn();
	};

	const handleCloseButtonPress = () => {
		clearAlert();
	};

	const handleDismiss = () => {
		if (alertObj.dismissable) {
			clearAlert();
		}
	};

	const handleOkay = () => {
		clearAlert();
		okay();
		alertObj.confirmFn && alertObj.confirmFn();
	};

	if (!alertObj) return null;
	if (!alertObj.type || alertObj.type === 'default') {
		return (
			<Modal
				style={styles.container}
				title={alertObj?.title || 'Alert'}
				palette="accent"
				open={alertObj !== undefined}
				onDismiss={handleDismiss}
			>
				<View style={styles.body}>
					<View style={styles.textContainer}>
						<Text style={typography.body1}>
							{alertObj?.message || 'Uh oh, an unknown error occurred!'}
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
	}
	if (alertObj.type === 'cancel donation') {
		return (
			<Modal
				style={styles.container}
				title={alertObj?.title || 'ARE YOU SURE?'}
				palette="secondary"
				open={alertObj !== undefined}
				onDismiss={handleDismiss}
			>
				<View style={styles.body}>
					<View style={styles.textContainer}>
						<Text style={typography.body1}>
							{alertObj?.message || 'This donation will be cancelled.'}
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
	}
	if (alertObj.type === 'donation published') {
		return (
			<Modal
				style={styles.container}
				title={alertObj?.title || 'DONATION PUBLISHED'}
				palette="secondary"
				open={alertObj !== undefined}
				onDismiss={handleDismiss}
			>
				<View style={styles.body}>
					<View style={styles.textContainer}>
						<Text style={typography.body1}>
							{alertObj?.message || 'Donation was published successfully. Thanks for your participation.'}
						</Text>
					</View>
					<View style={styles.buttonWrapper}>
						<View style={styles.leftButton}>
							<TextButton
								text="OKAY"
								style={{
									width: 120,
								}}
								buttonStyle={{
									default: scheme.tertiary,
									pressed: scheme.secondary,
									disabled: scheme.disabled,
								}}
								onPress={handleOkay}
							/>
						</View>
					</View>
				</View>
			</Modal>
		);
	}
	return null;
}
