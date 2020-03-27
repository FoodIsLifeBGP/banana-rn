/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';
import {
	TouchableHighlight, StyleProp, ViewStyle, TextStyle, TouchableHighlightProps,
} from 'react-native';
import { ColorPalette, COLOR_SCHEMES, ColorScheme } from '@util/colorSchemes';
import { useColorScheme } from 'react-native-appearance';
import styles from './Button.styles';

export type ButtonProps = TouchableHighlightProps & {
	children: React.ReactNode; // Elements to be wrapped by the button.
	activeStyle?: StyleProp<ViewStyle>; // Styling for the button during an 'active' pseudo-state.
	palette?: Omit<ColorPalette, 'disabled'>; // Determines the color styling of the button.
	outlined?: boolean; // Whether the button is styled with an outline and transparent body.
	compact?: boolean; // Whether the button should be without padding.
};

export default ({
	children,
	style = {},
	activeStyle = {}, // TODO: test
	palette = 'default',
	outlined = false,
	compact = false, // TODO: test
	disabled = false,
	activeOpacity = 0.8,
	onShowUnderlay = () => { },
	onHideUnderlay = () => { },
	...props
}: ButtonProps) => {
	const getPalette = () => {
		const scheme: ColorScheme = COLOR_SCHEMES[useColorScheme()];
		return disabled ? scheme.disabled : scheme[palette as ColorPalette];
	};

	const colorPalette = getPalette();

	// Underlay color is showed when the button is active.
	const UNDERLAY_COLOR = (activeStyle as ViewStyle)?.backgroundColor || colorPalette.color;
	const BORDER_COLOR = (style as TextStyle)?.color || colorPalette.color;

	// Default styling for the 'tertiary' palette.
	const defaultTertiaryStyle = {
		borderColor: BORDER_COLOR,
		borderWidth: outlined ? 2 : undefined,
	};

	// Default active style is the background color and text color swapped.
	const defaultActiveStyle = {
		backgroundColor: colorPalette.color,
		color: outlined ? 'white' : colorPalette.backgroundColor,
	};

	// Whether or not the button is pressed/ active.
	const [ pressed, setPressed ] = useState(false);

	return (
		<TouchableHighlight
			style={[
				styles.container,
				defaultTertiaryStyle,
				compact && styles.compact,
				style,
				colorPalette,
				pressed && !disabled && (activeStyle || defaultActiveStyle),
			]}
			underlayColor={UNDERLAY_COLOR}
			activeOpacity={activeOpacity}
			disabled={disabled}
			onShowUnderlay={() => { setPressed(true); onShowUnderlay(); }}
			onHideUnderlay={() => { setPressed(false); onHideUnderlay(); }}
			{...props}
		>
			{children}
		</TouchableHighlight>
	);
};
