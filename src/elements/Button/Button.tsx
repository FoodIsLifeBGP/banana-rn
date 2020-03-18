import React, { useState } from 'react';
import {
	TouchableHighlight, FlexStyle, StyleProp, ViewStyle,
} from 'react-native';
import { ColorPalette, COLOR_SCHEMES, ColorScheme } from '@util/colorSchemes';
import { useColorScheme } from 'react-native-appearance';
import styles from './Button.styles';

export type ButtonProps = {
	onPress: Function; // Callback function called with the button is pressed.
	children?: JSX.Element; // Elements to be wrapped by the button.
	style?: StyleProp<FlexStyle>; // Dimension styling for the button root.
	activeStyle?: StyleProp<ViewStyle>; // Styling for the button during an 'active' pseudo-state.
	disabled?: boolean; // Whether the button can be interacted with.
	palette?: Omit<ColorPalette, 'disabled'>; // Determines the color styling of the button.
	compact?: boolean; // Whether the button should be
};

export default ({
	onPress,
	children,
	activeStyle, // TODO: test
	style = {},
	disabled = false,
	palette = 'default',
	compact = false, // TODO: test
}: ButtonProps) => {
	const scheme: ColorScheme = COLOR_SCHEMES[useColorScheme()];
	const colorPalette = disabled ? scheme.disabled : scheme[palette as ColorPalette];

	// The color showed when the button is active.
	const UNDERLAY_COLOR = (activeStyle as ViewStyle)?.backgroundColor || scheme.secondary.backgroundColor;

	const [ pressed, setPressed ] = useState(false); // Whether or not the button is pressed/ active.

	return (
		<TouchableHighlight
			onPress={() => !disabled && onPress()}
			style={[
				styles.container,
				compact && styles.compact,
				style,
				colorPalette,
				pressed && !disabled && (activeStyle || scheme.secondary),
			]}
			underlayColor={UNDERLAY_COLOR}
			activeOpacity={0.8}
			disabled={disabled}
			onShowUnderlay={() => setPressed(true)}
			onHideUnderlay={() => setPressed(false)}
		>
			{children}
		</TouchableHighlight>
	);
};
