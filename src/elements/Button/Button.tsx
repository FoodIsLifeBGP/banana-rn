import React, { useState } from 'react';
import {
	TouchableHighlight, FlexStyle, StyleProp, ViewStyle,
} from 'react-native';
import styles from './Button.styles';

/**
 * ButtonType
 *
 * default = Gray background, blue text.
 * primary = Blue background, white text.
 * accent = Red background, white text.
 */
type ButtonType = 'default' | 'primary' | 'accent';

export type ButtonProps = {
	onPress: Function; // Callback function called with the button is pressed.
	style?: StyleProp<FlexStyle>; // Dimension styling for the button root.
	disabled?: boolean; // Whether the button can be interacted with.
	type?: ButtonType; // Determines the color styling of the button.
	compact?: boolean; // Whether the button should be
	activeStyle?: StyleProp<ViewStyle>; // Styling for the button during an 'active' pseudo-state.
	children?: JSX.Element; // Elements to be wrapped by the button.
};

export default ({
	onPress,
	style = {},
	disabled = false,
	type = 'default',
	compact = false,
	activeStyle,
	children,
}: ButtonProps) => {
	// The color showed when the button is active
	const UNDERLAY_COLOR = (activeStyle as ViewStyle)?.backgroundColor || styles.active.backgroundColor;

	const [ pressed, setPressed ] = useState(false); // Whether or not the button is pressed/ active.

	return (
		<TouchableHighlight
			onPress={() => !disabled && onPress()}
			style={[
				styles.container,
				compact && styles.compact,
				style,
				styles[type],
				pressed && (activeStyle || styles.active),
				disabled && styles.disabled,
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
