/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';
import {
	TouchableHighlight,
	TouchableHighlightProps,
	StyleProp,
	TextStyle,
	ViewStyle,
} from 'react-native';
import { COLOR_SCHEMES, ColorScheme } from '@util/colorSchemes';
import { useColorScheme } from 'react-native-appearance';
import { DARK_GRAY_TRANSPARENT } from '@util/colors';
import styles from './Button.styles';

export type ButtonProps = TouchableHighlightProps & {
	children: React.ReactNode; // Elements to be wrapped by the button.
	pressedStyle?: StyleProp<TextStyle>; // Styling for the button during an 'active' pseudo-state.
	disabledStyle?: StyleProp<TextStyle>; // Styling for the button if it's disabled.
	outlined?: boolean; // Whether the button is styled with an outline and transparent body.
};

export default ({
	children,
	style,
	pressedStyle,
	disabledStyle,
	outlined = false,
	disabled = false,
	activeOpacity = 0.8,
	onShowUnderlay = () => { },
	onHideUnderlay = () => { },
	...props
}: ButtonProps) => {
	const scheme: ColorScheme = COLOR_SCHEMES[useColorScheme()];
	const defaultStyle = scheme.default;
	const defaultDisabledStyle = scheme.disabled;

	// Underlay color is showed when the button is active.
	const UNDERLAY_COLOR = (pressedStyle as TextStyle)?.backgroundColor
		|| DARK_GRAY_TRANSPARENT;

	// Outline styling
	const borderColorSource = disabled ? disabledStyle || defaultDisabledStyle : style || defaultStyle;
	const BORDER_COLOR = (borderColorSource as TextStyle).color;
	const outlineBorder: ViewStyle = {
		borderColor: BORDER_COLOR,
		borderWidth: 2,
		borderStyle: 'solid',
	};

	// Whether or not the button is pressed/ active.
	const [ pressed, setPressed ] = useState(false);

	return (
		<TouchableHighlight
			style={[
				styles.container,
				defaultStyle,
				outlined && outlineBorder,
				style,
				pressed && pressedStyle,
				disabled && (disabledStyle || defaultDisabledStyle),
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
