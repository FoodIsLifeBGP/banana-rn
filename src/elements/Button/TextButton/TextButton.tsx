import React from 'react';
import {
	Text, TextStyle, StyleProp,
} from 'react-native';
import styles from '../Button.styles';
import Button, { ButtonProps } from '../Button';

type TextButtonProps = { text: string; textStyle?: StyleProp<TextStyle> } & ButtonProps;

export default ({
	text,
	onPress,
	style = {},
	textStyle = {},
	disabled = false,
	palette = 'default',
	compact = false,
}: TextButtonProps) => (
	<Button
		onPress={onPress}
		style={style}
		disabled={disabled}
		palette={palette}
		compact={compact}
		outlined={palette === 'tertiary'}
	>
		<Text style={[ styles.text, textStyle ]}>{text}</Text>
	</Button>
);
