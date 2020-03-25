import React, { useState } from 'react';
import {
	TouchableHighlight, FlexStyle, StyleProp, ViewStyle, TextStyle,
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
	compact?: boolean; // Whether the button should be without padding.
	outlined?: boolean; // Whether the button is styled with an outline and transparent body.
};

export default ({
	onPress,
	children,
	activeStyle, // TODO: test
	style = {},
	disabled = false,
	palette = 'default',
	compact = false, // TODO: test
	outlined = false,
}: ButtonProps) => {
	const scheme: ColorScheme = COLOR_SCHEMES[useColorScheme()];
	const colorPalette = disabled ? scheme.disabled : scheme[palette as ColorPalette];

	// The color showed when the button is active.
	const UNDERLAY_COLOR = (activeStyle as ViewStyle)?.backgroundColor || colorPalette.color;

	const BORDER_COLOR = (style as TextStyle)?.color || colorPalette.color;
	const defaultTertiaryStyle = { borderColor: BORDER_COLOR, borderWidth: outlined ? 2 : undefined };
	const defaultActiveStyle = { backgroundColor: colorPalette.color, color: outlined ? 'white' : colorPalette.backgroundColor };

	const [ pressed, setPressed ] = useState(false); // Whether or not the button is pressed/ active.

	return (
		<TouchableHighlight
			onPress={() => !disabled && onPress()}
			style={[
				styles.container,
				defaultTertiaryStyle,
				compact && styles.compact,
				style,
				colorPalette,
				pressed && !disabled && (activeStyle || defaultActiveStyle),
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
