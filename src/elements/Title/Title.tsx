import React from 'react';
import { View, Text } from 'react-native';
import styles from './Title.styles';

export default function ({ text }: { text: string }) {
	return (
		<View>
			<Text style={styles.text}>{text.toUpperCase()}</Text>
		</View>
	);
}
