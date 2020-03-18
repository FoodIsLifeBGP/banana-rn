import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ColorPalette, COLOR_SCHEMES } from '@util/colorSchemes';
import { useColorScheme } from 'react-native-appearance';
import { ScrollView } from 'react-native-gesture-handler';
import styles, { DEFAULT_TOP_OFFSET } from './Modal.styles';


interface ModalProps {
	title: string; // Title text shown in the header.
	open: boolean; // Whether the modal is open.
	top?: number; // Top offset for the modal relative to its parent.
	palette?: ColorPalette; // The color theme for the modal.
	onClose: Function; // Callback for when the modal 'should' close.
	children: JSX.Element; // Content element of the modal.
}

export default ({
	title,
	open,
	top = DEFAULT_TOP_OFFSET,
	palette = 'default',
	onClose,
	children,
}: ModalProps) => {
	const colorScheme = COLOR_SCHEMES[useColorScheme()];

	const handleUnderlayPress = () => {
		if (open) {
			onClose();
		}
	};

	return (
		<View style={[ styles.wrapper, !open && { width: 0, height: 0 } ]}>
			<TouchableOpacity style={styles.underlay} onPress={handleUnderlayPress} />
			<View style={[ styles.container, { top } ]}>
				<View style={[ colorScheme[palette], styles.header ]}>
					<Text
						style={styles.title}
					>
						{title.toUpperCase()}
					</Text>
				</View>
				<View style={styles.body}>
					<ScrollView contentContainerStyle={styles.bodyContent}>
						{children}
					</ScrollView>
				</View>
			</View>
		</View>
	);
};
