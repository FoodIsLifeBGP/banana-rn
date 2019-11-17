import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import fontMap from './fontMap';
import styles from './Icon.styles';

interface IconProps {
	name: string;
	style?: StyleProp<TextStyle>;
}

export default ({ name, style }: IconProps) => (
	<Text style={[ styles.icon, style ]}>
		{fontMap[name]}
	</Text>
);
