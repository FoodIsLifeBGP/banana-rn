/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import {
	Text,
	View,
	StyleProp,
	ViewStyle,
	TextStyle,
} from 'react-native';
import styles from './ContentHeader.styles';

export type HeaderSize = 'small' | 'large';

// TODO: add props that allow client to select, small(ContactScreen) vs large header(LoginScreen)
interface ContentHeaderProps {
	title: string;
	style?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
	headerSize?: HeaderSize;
}

export default ({
	title,
	style,
	textStyle,
	headerSize = 'small',
}: ContentHeaderProps) => {
	const sizedContainerStyle = headerSize === 'small'
		? styles.smallHeaderContainer
		: styles.largeHeaderContainer;

	const sizedTextStyle = headerSize === 'small'
		? styles.smallHeaderText
		: styles.largeHeaderText;

	return (
		<View style={[ styles.headerContainer, sizedContainerStyle, style ]}>
			<Text style={[ sizedTextStyle, textStyle ]}>
				{title}
			</Text>
		</View>
	);
};
