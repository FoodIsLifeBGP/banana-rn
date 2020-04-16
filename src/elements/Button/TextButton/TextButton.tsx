/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import {
	Text, TextStyle, StyleProp,
} from 'react-native';
import styles from '../Button.styles';
import Button, { ButtonProps } from '../Button';

type TextButtonProps = {
	text: string;
	textStyle?: StyleProp<TextStyle>;
} & Omit<ButtonProps, 'children'>;

export default ({
	text,
	textStyle, // 'backgroundColor' and 'color' will override pressed and disabled styling
	style,
	buttonStyle,
	outlined = false,
	disabled = false,
	...props
}: TextButtonProps) => (
	<Button
		style={style}
		buttonStyle={buttonStyle}
		outlined={outlined}
		disabled={disabled}
		{...props}
	>
		{
			foregroundColor => (
				<Text style={[
					styles.text,
					{
						color: foregroundColor,
					},
					textStyle,
				]}
				>
					{text}
				</Text>
			)
		}

	</Button>
);
