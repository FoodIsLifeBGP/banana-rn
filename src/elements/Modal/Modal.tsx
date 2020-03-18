import React from 'react';
import {
	View, Text, TouchableOpacity, StyleProp, ViewStyle,
} from 'react-native';
import { ColorPalette, COLOR_SCHEMES } from '@util/colorSchemes';
import { useColorScheme } from 'react-native-appearance';
import { ScrollView } from 'react-native-gesture-handler';
import styles, { DEFAULT_TOP_OFFSET } from './Modal.styles';


interface ModalProps {
	/** Title text shown in the header. */
	title: string; //

	/** Whether the modal is open. */
	open: boolean;

	/** Styling of the modal root. */
	style?: StyleProp<ViewStyle>;

	/** Top offset for the modal relative to its parent. */
	top?: number; //

	/** The color theme for the modal. */
	palette?: ColorPalette; //

	/** Callback for when the user taps outside of the modal container. */
	onDismiss: Function; //

	/** Body content of the modal. */
	children: JSX.Element | Array<JSX.Element>;
}

export default ({
	title,
	open,
	style = {},
	top = DEFAULT_TOP_OFFSET,
	palette = 'default',
	onDismiss,
	children,
}: ModalProps) => {
	const colorScheme = COLOR_SCHEMES[useColorScheme()];

	const handleUnderlayPress = () => {
		if (open) {
			onDismiss();
		}
	};

	return (
		<View style={[ style, styles.wrapper, !open && { width: 0, height: 0 } ]}>
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
