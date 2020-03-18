import React from 'react';
import {
	Text,
} from 'react-native';
import styles from '../Button.styles';
import Button, { ButtonProps } from '../Button';

type TextButtonProps = { text: string } & ButtonProps;

export default ({
	text,
	onPress,
	style = {},
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
	>
		<Text style={[ styles.text ]}>{text}</Text>
	</Button>
);
