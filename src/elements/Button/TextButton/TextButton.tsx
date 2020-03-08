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
	type = 'default',
	compact = false,
}: TextButtonProps) => (
	<Button
		onPress={onPress}
		style={style}
		disabled={disabled}
		type={type}
		compact={compact}
	>
		<Text style={[ styles.text ]}>{text}</Text>
	</Button>
);
