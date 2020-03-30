import React from 'react';
import { View, Text } from 'react-native';
import styles from './InputLabel.styles';

export default ({ text }: { text: string }) => (
	<View style={styles.container}>
		<Text style={styles.label}>{text}</Text>
	</View>
);
