/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import {
	Text, TextStyle, StyleProp,
} from 'react-native';
import styles from '../Button.styles';
import Button, { ButtonProps } from '../Button';

type TextButtonProps = { text: string; textStyle?: StyleProp<TextStyle> } & Omit<ButtonProps, 'children'>;

export default ({
	text,
	textStyle, // 'backgroundColor' and 'color' will override pressed and disabled styling
	style,
	pressedStyle,
	disabledStyle,
	outlined = false,
	disabled = false,
	...props
}: TextButtonProps) => (
	<Button
		style={style}
		pressedStyle={pressedStyle}
		disabledStyle={disabledStyle}
		outlined={outlined}
		disabled={disabled}
		{...props}
	>
		<Text style={[ styles.text, textStyle ]}>{text}</Text>
	</Button>
);
