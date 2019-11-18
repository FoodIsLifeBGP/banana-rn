import React from 'react';
import { View, Text } from 'react-native';
import styles from './InputLabel.styles';

export default ({ text, upperCase }: { text: string; upperCase?: boolean }) => (
	<View style={styles.container}>
		<Text style={styles.text}>{upperCase ? text.toUpperCase() : text}</Text>
	</View>
);
