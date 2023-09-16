/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import {
	Text, TextStyle, StyleProp,
} from 'react-native';
import typography from '@util/typography';
import Button, { ButtonProps } from '../Button';

type TextButtonProps = {
	/**
	 * Text within the button.
	 */
	text: string;

	/**
	 * Style of the text within the button.
	 * Setting 'color' will override buttonStyle.
	 */
	textStyle?: StyleProp<TextStyle>;
} & Omit<ButtonProps, 'children'>;

export default function ({
	text,
	textStyle,
	style,
	buttonStyle,
	outlined = false,
	disabled = false,
	...props
}: TextButtonProps) {
	return (
		<Button
			style={style}
			buttonStyle={buttonStyle}
			outlined={outlined}
			disabled={disabled}
			{...props}
		>
			{
				foregroundColor => (
					<Text
						style={[
							{
								...typography.h4,
								textAlign: 'center',
								color: foregroundColor,
							},
							textStyle,
						]}
						allowFontScaling={false}
					>
						{text}
					</Text>
				)
			}

		</Button>
	);
}
