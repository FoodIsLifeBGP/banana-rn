import React from 'react';
import {
	Text, TextStyle, StyleProp,
} from 'react-native';
import styles from '../Button.styles';
import Button, { ButtonProps } from '../Button';

type TextButtonProps = { text: string; textStyle?: StyleProp<TextStyle> } & ButtonProps;

export default ({
	text,
	textStyle = {},
	palette = 'default',
	compact = false,
	...props
}: TextButtonProps) => (
	<Button
		compact={compact}
		outlined={palette === 'tertiary'}
		palette={palette}
		// eslint-disable-next-line react/jsx-props-no-spreading
		{...props}
	>
		<Text style={[ styles.text, textStyle ]}>{text}</Text>
	</Button>
);
