import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Modal.styles';

interface ModalProps {
	title: string; // Title text show in the header.
	open: boolean; // Whether the modal is open.
	top?: number; // Top offset for the modal. Default: 90px.
	onClose: Function; // Callback for when the modal 'should' close.
	children: JSX.Element; // Content element of the modal.
}

export default ({
	title, open, top = 90, onClose, children,
}: ModalProps) => {
	const handleUnderlayPress = () => {
		if (open) {
			onClose();
		}
	};

	return (
		<View style={[ styles.wrapper, !open && { width: 0, height: 0 } ]}>
			<TouchableOpacity style={styles.underlay} onPress={handleUnderlayPress} />

			<View style={[ styles.container, { top } ]}>
				<View style={styles.header}>
					<Text
						style={styles.title}
					>
						{title.toUpperCase()}
					</Text>
				</View>

				<View style={styles.body}>
					<View style={styles.bodyContent}>
						{children}
					</View>
				</View>
			</View>
		</View>
	);
};
